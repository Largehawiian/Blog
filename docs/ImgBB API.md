---
sidebar_position: 1
title: ImgBB.com API Powershell Module
---
    While hanging out in the PowerShell Discord #Powershell-help channel. Someone asked for help in uploading
screenshots directly to the imgbb.com API. As always when digging into something, I had to fully dive into
the issue. 

As with many APIs I've worked with recently, there was little to no documentation, save a very basic example, as shown below.


    curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    
I had not worked with an API previously that required `x-www-form-urlencoded` parameters. Always keen to learn new methods, especially when interacting with an API, I spent a decent ammount of time learning how to upload images using this API. 

The first step was to create an account on the website and get an API key to authenticate with. Doing so was an easy process with the basic sign up, confirm your email and click `Generate API Key` process. 
Once I had an API key, the next step was converting the `curl` example into an `Invoke-RestMethod` invokation. As easy as this sounds, it's not always that easy to accomplish. Every API is slightly differnt in how it will accept arguments and input.

I started using the `[URIBuilder]` class, which is the basis for most of the project in which I interact with REST APIs. The class makes it easy to adjust paths, queries and `http` or `https` requests. I later found that the URI encoding of the `path` portion of the URL, didn't play nicely with the API, and was skewing the results. It caused the API to return an `Invalid v1 API Key` error. I then resorted to hard-coding the URI in the `Invoke-RestMethod` command.

I later discovered the version of `Invoke-RestMethod` included with PowerShell 7+ had an argument of `-form`. Further research showed the `-ContentType Form` argument was a customized version of a `-Body` statement. Since the `-ContentType Form` argument was availabe, I chose to write the module requiring `7.0` or better. The final `Invoke-RestMethod` call is shown below.

```powershell

Invoke-RestMethod -Method POST  -Uri ("https://api.imgbb.com/1/upload?key={0}" -f $Key) -Body $Form -ContentType form 
```

The final obsticle was converting an image into `Base64` format. This is a fairly easy task. Making use of the `[convert]::ToBase64String()` class and method. However before converting to `Base64`, we must first convert the image into a `Byte` array. We can make this very efficient by combining the two processes into `[convert]::ToBase64String((get-content $path -AsByteStream))`, where `$path` is the file passed by the function. The completed resulting function is shown below.

I chose to add a `[switch]$OpenInBrowser` optional switch to the function as a quality of life improvement to the function. 

After reviewing the output of the API, I chose options I felt that would be most useful to those who may use the module. Those being, the full URL, shortened URL, thumbnail URL, medium URL and the URL which gives a delete option. 

```powershell
Function _UploadImage {
    Param(
        [String]$path,
        [String]$key,
        [Switch]$OpenInBrowser
    )
    $Form = @{
        image = [convert]::ToBase64String((get-content $path -AsByteStream))
    } 
    try {
        $response = Invoke-RestMethod -Method POST  -Uri ("https://api.imgbb.com/1/upload?key={0}" -f $Key) -Body $Form -ContentType form
    }
    catch {
        $_.Exception.Response
    }
    $output = [PSCustomObject]@{
        Image = $response.data.display_url
        ShortURL = $response.data.url_viewer
        DeleteURL = $response.data.delete_url
        ThumbnailURL = $response.data.thumb.url
        MediumURL = $response.data.medium.url
    }
    if ($OpenInBrowser) {
        Start-Process $output.Image
    }
    return $output
}
```

Bulding on the success of this function, I assumed there would be those who may want to upload a whole folder of images. Not to leave those poor souls out in the cold, I created the `_UploadFolder` function. 

This function takes pipeline input from `Get-ChildItem` and processes each item individually; returning a `[PScustomObject]` for each upload. 

While all this worked very well, this did not satisfy the requirements of the person in Discord I was trying to help. They wanted to automatically upload screen shots directly to ImgBB.com. I first wrote out the `_ScreenCapture_` function as shown below, which will send the `PrintScreen` button via the `[Windows.Forms.SendKeys]` class to trigger a `Print Screen` event. As Windows saves `Print Screen` data to the clipboard, the next step was to save the clipboard data to a variable using `$BitMap = [Windows.Forms.Clipboard]::GetImage()`. 

Now that we have the screen grap from `Print Screen`, we can start manipulating the data for upload. 
The next step is to create a new memory stream instance using `$Stream = [IO.MemoryStream]::new()`. This will let us convert the `Print Screen` data into a memory stream using `$bitmap.Save($Stream, [Drawing.Imaging.ImageFormat]::Jpeg)`.

Now that we finally have the data in a memory stream, we can convert into a `Byte array`, then finally into `Base64` for upload. The final function is shown below. I chose to create a separate function `_Uploadstream` to process the upload portion of the process, which is shown below as well.

```powershell
function _ScreenCapture{
    param(
        [String]$Key,
        [Switch]$OfWindow
    )
    begin {
        Add-Type -AssemblyName System.Drawing
    }
    process {
        Start-Sleep -Milliseconds 250
        if ($OfWindow) {
            [Windows.Forms.Sendkeys]::SendWait("%{PrtSc}")
        } else {
            [Windows.Forms.Sendkeys]::SendWait("{PrtSc}")
        }
        Start-Sleep -Milliseconds 250
        $bitmap = [Windows.Forms.Clipboard]::GetImage()
        $Stream = [IO.MemoryStream]::new() 
        $bitmap.Save($Stream, [Drawing.Imaging.ImageFormat]::Jpeg)
        [byte[]]$ImageByes = $Stream.ToArray()
        _UploadStream -Image $ImageByes -Key $Key -OpenInBrowser
    }
}
```
```powershell
Function _UploadStream {
    Param(
        [byte[]]$Image,
        [String]$key,
        [Switch]$OpenInBrowser
    )
    $Form = @{
        image = [convert]::ToBase64String($image)
    } 
    try {
        $response = Invoke-RestMethod -Method POST `
        -Uri ("https://api.imgbb.com/1/upload?key={0}&Name={1}" -f $Key,$Env:COMPUTERNAME+"-"+(Get-Date -Format "MM-dd-yyyy-HH:mm")) -Body $Form
    }
    catch {
        $_.Exception.Response
    }
    $output = [PSCustomObject]@{
        Image = $response.data.display_url
        ShortURL = $response.data.url_viewer
        DeleteURL = $response.data.delete_url
        ThumbnailURL = $response.data.thumb.url
        MediumURL = $response.data.medium.url
    }
    if ($OpenInBrowser) {
        Start-Process $output.Image
    }
    return $output
}
```
### Github Repository for the project.

[ImgBB API Powershell Module ](https://github.com/Largehawiian/ImgBBAPI)
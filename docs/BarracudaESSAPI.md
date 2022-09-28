---
sidebar_position: 3
title: Barracuda Email Security API Powershell Module
---
###
Barracuda's cloud spam filter service works really well, however as a MSP partner, they do not provide "good" reporting or methods of excluding aliases, shared mailboxes and distribution groups from billing. Their most recent API exposed a few useful endpoints making our lives easier. As always, the API documentation is not all that helpful. I set out on a mission to make a useful tool. 


### Examples

```
Install-Module BarracudaESSAPI
Import-Module BarracudaESSAPI
```

### Get OAthtoken
```
$Oath = Get-ESSAuthToken -ClientID "YourID" -ClientSecret "YourSecret"
```

### Get all partner tenant usage
```
Get-ESSPartnerConsumption -OauthToken $Oath -PartnerName "PartnerUserName"
```

### Get individual tenant email addresses and exclusions
```
Get-ESSCompanyConsumption -OathToken $Oath -Company "CompanyUserName"
```

### Add email address to exclusion list
```
Add-ESSExclusion -OauthToken $Oath -Company "CompanyUserName" -User "Email@ToExclude.com"
```

### Remove email address from exclusion list

```
Remove-ESSExclusion -OauthToken $Oath -Company "CompanyUserName" -User "Email@ToExclude.com"
```
---
### Github Repository for the project.
[Barracuda ESS API Powershll Module](https://github.com/Largehawiian/BarracudaESSAPI)
# Back_End For Ride For Life

## PVD LINK

### https://docs.google.com/document/d/1-PKqSaBhlZjVlKvtGwjtclaYex2PwfN3v_ktRlXBbZI/edit

### MAIN URL : https://rideforlifebackend.herokuapp.com 
<br/>
###(EXAMPLE: https://rideforlifebackend.herokuapp.com/api/patient/signup)

| URL  | METHOD | Object Example |
| ---- | :----: | ---------------: |
| /api/patient/signup |  POST  |  FullName (Required),<br/> UserName (Required/Unique),<br/> Password (Required), <br/> PhoneNumber (Integer & Required),<br/> DueDate,<br/> Email,<br/> Address,<br/> City       |
| /api/driver/signup |  POST  |  FullName (Required),<br/> UserName (Required/Unique),<br/> Password (Required), <br/> PhoneNumber (Integer & Required),<br/> Vehicle,<br/> Shift,<br/> Price,<br/> Email, <br/> City (Required)       |
| /api/patient/login |  POST  |     UserName, <br/> Password             |
| /api/driver/login |  POST  |     UserName, <br/> Password             |

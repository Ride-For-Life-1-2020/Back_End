# Back_End For Ride For Life

## PVD LINK

### https://docs.google.com/document/d/1-PKqSaBhlZjVlKvtGwjtclaYex2PwfN3v_ktRlXBbZI/edit

### MAIN URL : https://rideforlifebackend.herokuapp.com 
<br/>
### EXAMPLE: https://rideforlifebackend.herokuapp.com/api/patient/signup

## Driver Endpoints
| URL  | METHOD | Object Example | Authorization? |
| ---- | :----: | :---------------: |  ---------------: |
| /api/drivers/signup |  POST  |  FullName (<strong>Required</strong>),<br/> UserName (<strong>Required & Unique</strong>),<br/> Password (<strong>Required</strong>), <br/> PhoneNumber (<strong>Integer & Required</strong>),<br/> Vehicle,<br/> Shift,<br/> Price,<br/> Email, <br/> City (<strong>Required</strong>)       | No |
| /api/drivers/login |  POST  |     UserName (<strong>Required</strong>), <br/> Password (<strong>Required</strong>)            | No |
| /api/drivers |  GET  |               | Yes (<br> Requires: 'authorization' header</br>|

## Patient Endpoints
| URL  | METHOD | Object Example |
| ---- | :----: | ---------------: |
| /api/patients/signup |  POST  |  FullName (<strong>Required</strong>),<br/> UserName (<strong>Required & Unique</strong>),<br/> Password (<strong>Required</strong>), <br/> PhoneNumber (<strong>Integer & Required</strong>),<br/> DueDate,<br/> Email,<br/> Address,<br/> City       | No |
| /api/patients/login |  POST  |     UserName (<strong>Required</strong>), <br/> Password (<strong>Required</strong>)             | No |
| /api/patients |  GET  |               | Yes (<br> Requires: 'authorization' header</br>|

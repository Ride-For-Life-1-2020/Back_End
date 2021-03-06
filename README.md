# Back_End For Ride For Life

## PVD LINK

### https://docs.google.com/document/d/1-PKqSaBhlZjVlKvtGwjtclaYex2PwfN3v_ktRlXBbZI/edit

### MAIN URL : https://rideforlifebackend.herokuapp.com 
<br/>
### EXAMPLE: https://rideforlifebackend.herokuapp.com/api/patient/signup

## Driver Endpoints
| URL  | METHOD | Object Example | Authorization? |
| ---- | :----: | :---------------: |  ---------------: |
| /api/drivers/signup |  POST  |  FullName (<strong>Required</strong>),<br/> UserName (<strong>Required & Unique</strong>),<br/> Password (<strong>Required</strong>), <br/> PhoneNumber (<strong>Integer (*10 Char Max*) & Required</strong>),<br/> Shift,<br/> Price <strong>(Integer)</strong>,<br/> Email, <br/> City_ID (<strong>Required/Integer</strong>), <br/>Vin, <br/>LicensePlate, <br/>Mileage (<strong>Integer</strong>),<br/> VehicleModel, <br/>Year, <br/>VehicleMake, <br/>PolicyNumber(<strong>Integer</strong>), <br/>InsuranceCompany, <br/>LicenseNumber, <br/>DateOfBirth       | No |
| /api/drivers/login |  POST  |     UserName (<strong>Required</strong>), <br/> Password (<strong>Required</strong>)            | No |
| /api/drivers |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/drivers/:UserName |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/drivers/:UserName |  PUT  |  Any of The SignUp Fields Above (**Note: You can update Password & It Will Rehash/Cannot Update ID Field**)            | <strong> Requires: 'authorization' header</strong>| 
| /api/drivers/:UserName |  DELETE  |           | <strong> Requires: 'authorization' header</strong>| 

## Patient Endpoints
| URL  | METHOD | Object Example | Authorization? |
| ---- | :----: | :---------------: | ---------------: |
| /api/patients/signup |  POST  |  FullName (<strong>Required</strong>),<br/> UserName (<strong>Required & Unique</strong>),<br/> Password (<strong>Required</strong>), <br/> PhoneNumber (<strong>Integer (*10 Char Max*) & Required</strong>),<br/> DueDate,<br/> Email,<br/> Address,<br/> City_ID (<strong>Required/Integer</strong>),<br/>  HospitalName,<br/>  HospitalAddress      | No |
| /api/patients/login |  POST  |     UserName (<strong>Required</strong>), <br/> Password (<strong>Required</strong>)             | No |
| /api/patients |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/patients/:UserName |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/patients/:UserName |  PUT  |  Any of The SignUp Fields Above (**Note: You can update Password & It Will Rehash/Cannot Update ID Field**)            | <strong> Requires: 'authorization' header</strong>| 
| /api/patients/:UserName |  DELETE  |           | <strong> Requires: 'authorization' header</strong>| 

## Ride Endpoints
| URL  | METHOD | Object Example | Authorization? |
| ---- | :----: | :---------------: | ---------------: |
| /api/rides |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/rides/request |  POST  |Driver (<strong>Required/THEIR USERNAME </strong>),<br/> Patient (<strong>Required/THEIR USERNAME</strong>),<br/> Address (<strong>Required</strong>)| <strong> Requires: 'authorization' header</strong>| 

## Cities Endpoints
| URL  | METHOD | Object Example | Authorization? |
| ---- | :----: | :---------------: | ---------------: |
| /api/cities |  GET  |               | <strong> Requires: 'authorization' header</strong>|
| /api/cities |  POST  | City (**Required**) | <strong> Requires: 'authorization' header</strong>| 

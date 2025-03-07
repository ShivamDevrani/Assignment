### NOTE--->
I have hosted My server on  Render, so render free services may take time at starting but once the server started, then it will run fine..

# School Management API

This API allows you to manage schools by listing them based on geographic coordinates and adding new schools to the database. It uses the **Haversine formula** to calculate distances between geographic coordinates.


## Routes

### GET `/listSchools`
Retrieves a list of schools based on the provided latitude and longitude.

#### Query Parameters
- `latitude` (required): The latitude of the location.
- `longitude` (required): The longitude of the location.

#### Example Request
```bash
GET /listSchool?latitude=19.0760&longitude=72.8777
```
### POST `/addSchool`

#### Example Payload Data in body for POST request
```

    {
        "name": "Kendriya Vidyalaya No.1",
        "address": "Near Railway Colony, Mumbai",
        "latitude": 19.0760,
        "longitude": 72.8777
    } 

```
## Postman Collection

Click the link below to access the Postman collection:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://assignment-link.postman.co/workspace/ShivamDevraniAssignment~4c36e284-8895-49f1-b4ed-5cc5678ddd2e/request/32999626-1285cf71-0d74-4f11-b96e-9ddfd652baa0?action=share&creator=32999626&ctx=documentation)

### Hosting Information
This API's hosted on Render ,
 MySql database hosted on Cloud Clever 

 ## Some Screenshots
 
![Alt Text](https://raw.githubusercontent.com/ShivamDevrani/Assignment/main/schema.png)

![Alt Text](https://raw.githubusercontent.com/ShivamDevrani/Assignment/main/getLIST.png)


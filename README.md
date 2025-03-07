# School Management API

This API allows you to manage schools by listing them based on geographic coordinates and adding new schools to the database. It uses the **Haversine formula** to calculate distances between geographic coordinates.


## Routes

### GET `/listSchool`
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
        "id": 1,
        "name": "Kendriya Vidyalaya No.1",
        "address": "Near Railway Colony, Mumbai",
        "latitude": 19.0760,
        "longitude": 72.8777
    } 

```


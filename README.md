# School Management API

This API allows you to manage schools by listing them based on geographic coordinates and adding new schools to the database. It uses the **Haversine formula** to calculate distances between geographic coordinates.

---

## Table of Contents
1. [Routes](#routes)
   - [GET /listSchool](#get-listschool)
   - [POST /addSchool](#post-addschool)
2. [Database Table Structure](#database-table-structure)
3. [Haversine Formula](#haversine-formula)
4. [Postman Collection](#postman-collection)
5. [Screenshots](#screenshots)

---

## Routes

### GET `/listSchool`
Retrieves a list of schools based on the provided latitude and longitude.

#### Query Parameters
- `latitude` (required): The latitude of the location.
- `longitude` (required): The longitude of the location.

#### Example Request
```bash
GET /listSchool?latitude=19.0760&longitude=72.8777

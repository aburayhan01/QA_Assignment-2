# Teacher API Automation Testing (Postman + Newman)

##  Project Overview

This project demonstrates **API automation testing** for a Teacher Management API using **Postman** and **Newman**.
The collection performs full **CRUD operations (Create, Read, Update, Delete)** and validates responses using test scripts.
Newman is used to execute the collection from the command line and generate an **HTML test report**.


##  Tools & Technologies

* Postman
* Newman
* Newman HTML Extra Reporter
* Node.js
* GitHub


##  How to Run the Project

### 1️ Run from Postman

1. Import the **Postman Collection** (`Teacher_collection.json`)
2. Import the **Environment file** (`Teacher_environment.json`)
3. Select the environment in Postman.
4. Click **Run Collection**
5. Execute all requests in sequence.


### 2️ Run with Newman (CLI)

1. Install **Node.js**
2. Initialize the project:

```
npm init -y
```

3. Install Newman:

```
npm install newman
```

4. Run the collection using Newman:

```
npx newman run "Teacher API Testing.postman_collection.json" -e "Teacher API Environment.postman_environment.json"
```

### 3️ Generate HTML Report

1. Install the HTML reporter:

```
npm install newman-reporter-htmlextra
```

2. Configure the **report.js** file with:

* Postman collection API link
* API key
* Report export path

3. Run the script from terminal:

```
node .\report.js
```

4. The HTML report will be generated in the **Reports** folder.

## Documentation
URL for published documentation
https://documenter.getpostman.com/view/38568115/2sBXcLgdRB


##  Test Cases

### Authentication

* **Login (Valid Credentials)** → Status **200**, token returned and saved in environment.
* **Token Validation** → Token exists and is not empty.

### Teachers CRUD

**Create Teacher**

* Status **200/201**
* `teacherId` exists in response
* Response data matches request
* `teacherId` saved in environment

**Get All Teachers**

* Status **200**
* Response schema is valid
* Newly created teacher exists in list

**Filters**

* Department filter returns correct teachers
* Email filter returns correct teacher

**Get Teacher by ID**

* Status **200**
* Returned `teacherId` equals saved `teacherId`

**Update Teacher**

* Status **200**
* At least two fields updated successfully

**Delete Teacher**

* Status **200/204**
* After deletion, GET by ID returns **404**

### Negative Tests

* Login with wrong credentials → **401/400**
* Access teachers without token → **401**
* Get teacher with invalid ID → **404**
* Create teacher with missing required field → **400**


##  Postman Collection

Exported Postman Collection is included in this repository.

File:
Teacher API Testing.postman_collection.json

---

##  HTML Report Screenshot

<img width="932" height="869" alt="Screenshot 2026-03-09 120255" src="https://github.com/user-attachments/assets/afedaf7c-bcdd-4bbe-ba6e-a2805609dd41" />


##  Project Video

[Video recording of the full project execution.](https://drive.google.com/file/d/108ry0HP8P7qokvDU7Ias3RhIuBPeQf63/view?usp=sharing)

---

##  Google Drive Folder

Drive Link:
[Video and screenshot link](https://drive.google.com/drive/folders/1N1vCoWI5DNvljqw_feZW0l2HlW4dSClr?usp=drive_link)

The drive folder contains:

* HTML Report Screenshot
* Project Video Recording

---


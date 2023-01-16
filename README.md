<!-- ABOUT THE PROJECT -->
## About The Project

Here is my Fullstack CRUD web application project. Using Spring boot & maven as backend and React JSX as frontend.
<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Download both folders (tclient & tserver) <br>
***REMEMBER TO CHANGE YOUR OWN MariaDB INFORMATION TO THE APPLICATION.PROPERTIES FILE***

### Installation

Below is an example of how you can install and set up this project locally.

1. Open tclient with VSC and run command; 
```
npm install
```
To install all the node modules that is used in this project.
After the install you should be able to run it with; 
```
npm start
```
This client opens in port 3000. React should open in straight to your browser but if it fails use URL; Localhost:3000.

2. Start the backend

Navigate to the tserver -> *crud* folder and run command; 
   ```
   mvn package
   ```
It should run without problems to the end saying all the tests were successfull.
Next navigate to the *target* folder inside *crud* folder and you should be able to see Java file named : 
*Crud-0.0.1-SNAPSHOT*

Run this application trough your terminal with command
   ```
   java -jar .\Crud-0.0.1-SNAPSHOT.jar
   ```

3. Finish

You are ready to go, now backend is running and you can access all the API endpoints on : Localhost:8080/api

4. API endpoints

/api/users [GET, POST] <br>
/api/users/{id} [GET, POST, PUT, DELETE]
<br> </br>
/api/profiles [GET, POST] <br>
/api/profiles/{id} [GET, POST, PUT, DELETE]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Screenshots

React client : https://git.vamk.fi/attachments/ea1f2067-d5e4-4355-b0db-15f882098a9a?raw=true
<br></br>
Postman : https://git.vamk.fi/attachments/45f65424-b28d-47c9-893e-0d56e681a989?raw=true

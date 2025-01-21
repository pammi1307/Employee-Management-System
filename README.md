# Employee-Management-System

A full-stack web application for managing employee records, built with **Java Spring Boot** for the backend and **Vite-React** for the frontend. This application allows users to perform CRUD operations (Create, Read, Update, Delete) on employee data.

---

## Features
- List all employees with pagination and search functionality.
- Add new employee records.
- Update existing employee information.
- Delete employee records.
- Seamless integration between frontend and backend using **Axios**.

---

## Technologies Used

### Backend
- **Java Spring Boot**: For building RESTful APIs and handling business logic.
- **Spring Data JPA**: For database interactions.
- **MySQL**: As the database management system.
- **Maven**: For project build and dependency management.
- **Eclipse IDE**: For backend development and debugging.

### Frontend
- **Vite-React**: For building a fast and responsive user interface.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For styling the application.

---

## Installation

### Backend Setup
#### 1. Clone the repository:
   ```bash
   git clone https://github.com/pammi1307/Employee-Management-System.git
   ```
#### 2. Open the backend project in Eclipse IDE:
  
  - Open Eclipse, go to File → Import → Existing Maven Projects.
  - Select the ems-backend directory and click Finish

#### 3. Configure the application.properties file with your MySQL database credentials:
  - spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
  - spring.datasource.username=your_username
  - spring.datasource.password=your_password


### Frontend Setup
#### 1. Navigate to the frontend directory:
  ```bash
    cd ../ems-frontend
  ```
#### 2.Install dependencies:
  ```bash
    npm install
  ```
#### 3.Start the development server:
  ```bash
    npm run dev
  ```

## API Endpoints

### Employee Management
- `GET /api/employees`  
  **Description**: List all employees.

- `POST /api/employees`  
  **Description**: Add a new employee.

- `PUT /api/employees/{id}`  
  **Description**: Update an employee by ID.

- `DELETE /api/employees/{id}`  
  **Description**: Delete an employee by ID.



   

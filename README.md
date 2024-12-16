# Contact Catalog

This is a **Contact CataLog** application built using **React.js**, **Node.js**, and **MongoDB**.

## Features
- **CRUD Operations**: Create, read, update, and delete contacts directly within the application.
- **Pagination**: Easily navigate through multiple pages of contacts.
- **Sorting**: Contacts are initially sorted by their full name for better organization.
- **Search**: Quickly search and filter contacts by name or other details.

## Frontend UI
- **Home Page**: Displays all contacts in a tabular format.
- **Add Contact**: Form to add a new contact with fields for name, address, phone numbers, and email.
- **Edit Contact**: Update details of an existing contact.
- **Delete Contact**: Remove contacts with a single click.
- **User Authentication**: Login and Register functionality for users.

## Installation
### Install Dependencies for Both Backend and Frontend

#### Backend (Node.js)
1. Navigate to the backend folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

#### Frontend (React.js)
1. In a separate terminal window, navigate to the frontend folder:
   ```bash
   cd client\my-app
   ```
2. Install dependencies:
   ```bash
   npm install/yarn install
   ```

---

## Running the Application

### 1. Start the Backend Server
- Navigate to the `backend` directory.
- Start the Node.js server:
  ```bash
  npm run dev
  ```
- The backend will run on [http://localhost:8080](http://localhost:8000) (or the port specified in your configuration).

### 2. Start the Frontend Development Server
- Navigate to the `frontend` directory.
- Start the React development server:
  ```bash
  npm start
  ```
- The frontend will run on (http://localhost:5173) by default.

---

## Usage

### Add Contact
- Click the "Add Contact" button to open the contact form.
- Fill in the required fields: First Name, Last Name, Phone Number, Email, etc.
- Click "Save" to create a new contact.

### Edit Contact
- Select a contact from the list and click the "Edit" button.
- Update the contact's details and click "Save Changes" to update the information.

### Delete Contact
- Click the "Delete" button next to a contact to remove it permanently.

### Search Contacts
- Use the search bar to find specific contacts by their name, email, or phone number, etc.

---

## Folder Structure

```
contact-book/
├── Contact Keeper Backend/           # Backend code (Node.js + Mongodb)
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── server.js      # Entry point for backend server
├── Contact Keeper Frontend/          # Frontend code (React.js)
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md          # Documentation
```

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


---

## Screenshots
### Login Page
![login](https://github.com/user-attachments/assets/77e6764b-b740-40d8-976b-497fc3d39346)

### Register Page
![createcontact](https://github.com/user-attachments/assets/1bf275e7-6af1-48f3-92cd-deec557dabd1)

### View All Contact
![contactinterface](https://github.com/user-attachments/assets/be72921f-b2de-44a0-b1ea-9cccf7b95569)

### Preview of Contact Detail
![details](https://github.com/user-attachments/assets/f07dcfd3-64b0-4d69-b9da-34d824343cbb)

### Add Contact
![createcontact](https://github.com/user-attachments/assets/1bf275e7-6af1-48f3-92cd-deec557dabd1)



---


**Developed by:**  
**Gayathri**  
Email: [gayathriseran371@gmail.com]  

```



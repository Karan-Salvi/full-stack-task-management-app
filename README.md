## Project Description

### **FoodSwift - Food Delivery System**

The **FoodSwift** is a full-stack web application built using skills in Node.js,Express and React.js. The system allows users to register, log in, browse a menu, manage items in a cart, and place food orders. The backend API is developed using Node.js and Express, and the frontend is implemented using React.js.

The system is designed using Tailwind CSS ensuring responsiveness in mind, ensuring seamless operation on both desktop and mobile devices. 

---

## Features

### **1. Core Features**
- **Authentication**:
  - User registration and login using JWT for secure authentication.
  - User session management.

- **Menu Management**:
  - Display menu items in categorized sections (Appetizers, Main Course, Desserts, etc.).
  - Add, update, and delete menu items 

- **Order Management**:
  - Add items to the cart and specify quantities.
  - View cart details and calculate the total price dynamically.
  - Place an order and view order history.

### **2. Backend Features**
- Built with **Node.js** and **Express.js**.
- Database integration using **MongoDB** (MongoDB Atlas or local instance).
- RESTful API endpoints:
  - `POST /register` and `POST /login` for authentication.
  - `GET /menu`, `POST /menu`, `PUT /menu/:id`, and `DELETE /menu/:id` for menu management.
  - `POST /order` and `GET /orders` for order placement and retrieval.
- Input validation using zod and error handling for robust API interactions.

### **3. Frontend Features**
- Built with **React.js** using **Create React App**.
- **Pages and Components**:
  - Login page with JWT token storage on successful login.
  - Menu page showcasing all items in a grid layout with CRUD operations.
  - Cart component for managing selected items and their quantities.
  - Order page displaying the cart, order total, and order history.
- State management using **Redux**.
- API integration using **fetch** for smooth backend communication.
- Responsive design using **Tailwind CSS**.



### **4. Deployment**
- **Frontend**: Deployed on platforms like Vercel.
- **Backend**: Hosted using Vercel.
- **Database**: Cloud-hosted on MongoDB Atlas.
- **Live Links**:
  - Frontend URL: [[https://your-frontend-link.vercel.app](https://your-frontend-link.vercel.app)](https://full-stack-task-management-app-liart-ten.vercel.app/)
  - Backend URL: [[https://your-backend-link.herokuapp.com](https://your-backend-link.herokuapp.com)](https://api-full-stack-task-management-app.vercel.app/)

---


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas for cloud database)

### Steps to Set Up

1. Clone the repository:

```
git clone https://github.com/Karan-Salvi/full-stack-task-management-app.git
cd full-stack-task-management-app  

```


2. Install Dependency :
   
```
cd Backend
npm install

cd Frontend
npm install
```


3. Create .env file in Backend Folder and copy paste it and place your environment variable values :
   
```
PORT = 

FRONTEND_URI = 

MONGODB_URI = 

DATABASE_NAME = 

REFRESH_TOKEN_SECRET = 

REFRESH_TOKEN_EXPIRY = 

TOKEN_NAME = 
```


4. Run the code :
   
```
cd Frontend
npm run dev

cd Backend
npm run dev

```

## Challenges and Assumptions
- Ensured compatibility between frontend and backend APIs.
- Handled responsiveness for different device screen sizes.

jaksd ;ladjs ;lkja lka jsdl;f
asd alsdfj asdf 
as fasdf jas
ef asdf 
asdf 
asdf asd ad 
 


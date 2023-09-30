# MueshiBay Seller Dashboard

## Table of Contents
- [Introduction](#introduction)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Database Setup](#database-setup)
  - [Migrating and Adding Dummy Data](#migrating-and-adding-dummy-data)
  - [Running the Application](#running-the-application)
- [Features](#features)
- [Future To-Do](#future-to-do)

## Introduction
Welcome to the MueshiBay Seller Dashboard repository! This dashboard is designed for sellers on the MueshiBay platform, enabling them to manage their listings, view and accept bids, and track their lifetime total sales. This README will guide you through the setup and usage of the application.

## Technical Stack
- Frontend: React with Vite for fast development.
- Backend: Node.js with Express for the server.
- Database: MongoDB
- Authentication: User authentication JWT.
- Styling: Tailwind CSS and Daisy UI

## Getting Started
To get started with the MueshiBay Seller Dashboard, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project folder:

   - For Front-end:
     ```bash
     cd mueshibay-seller-dashboard
     ```

   - Install frontend dependencies:
     ```bash
     cd client
     npm install
     ```

   - Install backend dependencies:
     ```bash
     cd server
     npm install
     ```

3. **Database Setup and env:**

   - **For Back-end:**

     - Configure the database connection in the server's `.env` file:
     - Create a `.env` file in the `client` directory and configure the front-end environment variables as follows:
       ```env
       PORT=4000
       MONGODB_URI=  # MongoDB connection URI
       JWT_KEY=
       EMAIL=  # For node mailer
       PASSWORD=  # for node mailer
       BASE_URL=  # Front-end running at
       NODE_ENV=development
       ```

   - **For Front-end:**

     - Create a `.env` file in the `server` directory and configure the backend-end environment variables as follows:
       ```env
       BASE_URL=  # for front-end
       ```

4. **Migrating and Adding Dummy Data:**

   - To migrate and add dummy data to MongoDB, run the following command:
     ```bash
     npm run migrate
     ```

5. **Running the Application**

   - To start the MueshiBay Seller Dashboard:

     - Start the backend server:
       ```bash
       cd server
       npm start
       ```

     - Start the frontend development server:
       ```bash
       cd client
       npm run dev
       ```

   - Access the application in your web browser at [http://localhost:5173](http://localhost:5173).

**Default User:**
- Email: user@example.com
- Password: 12345678

## Features
- **Listings:** Create, view, update, and delete your product listings.
- **Bids:** View and accept active bids on your listings. (Future: Send email notifications to bidders upon bid acceptance)
- **Sales Tracking:** Monitor your lifetime total sales.
- **User Authentication:** Secure access to the dashboard.
- **Database Persistence:** Store user and listing data in your chosen database.
- **Responsive Design:** Aesthetic and functional on all devices.

## Future To-Do
- **Payment Method:** Integrate a payment gateway for seamless transactions.
- **Chat Box:** Implement a chat feature for real-time communication with buyers.
- **Error Handling/Messages/Status:** Enhance error handling and provide meaningful error messages and status updates to users.
- **Directory Structure:** Maintain a clean and organized directory structure for better code management.
- **My Bids Screen:** Create a dedicated screen for users to view and manage their bids.
- **Edit My Bids:** Allow users to edit their existing bids.
- **Test Cases:** Develop comprehensive test cases for both frontend and backend for improved reliability.
- **Analytics for Enhanced Insights:** Integrate analytics tools like Google Analytics to gain insights into user behavior and dashboard performance.

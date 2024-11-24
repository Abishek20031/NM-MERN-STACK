FLIGHT BOOKING APPLICATION USING MERN STACK

Overview
The Flight Booking System is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to search for available flights, book tickets, select seats, and includes a dedicated Flight Operator Page where operators can manage flights. The system offers features like user authentication, flight management, and booking processes, providing an end-to-end solution for a flight booking system.

Features
User Authentication: Register new users and authenticate existing ones.
Flight Search: Search flights based on departure and destination locations.
Booking: Users can book flights, selecting available seats.
Flight Operator Page: Operators can add, update, and manage flight schedules and availability.
Admin Panel: Admin users can view all bookings and manage flight information.
Responsive Design: Fully responsive for different screen sizes and devices.
Technology Stack
Frontend:
React.js: Dynamic user interface.
CSS: Custom styles for various components and pages.
Backend:
Node.js: Server-side logic.
Express.js: API endpoints and request handling.
Database:
MongoDB: NoSQL database for storing flight, user, and booking information.
**Installation and Setup
****Requirements
**Ensure you have the following installed:

Node.js (v14+)
MongoDB (v4+)
Git
**Steps to Set Up
**
1)Backend Setup:
Navigate to the server directory:
cd server
Install dependencies:
npm install

2)Configure environment variables in a .env file (create the file if not present) with your MongoDB connection string:
makefile
MONGO_URI=your_mongodb_connection_string

3)Start the server:
npm start

Frontend Setup:

Navigate to the client directory:

cd ../client
Install frontend dependencies:
npm install
Start the React app:
npm start
Access the Application:
Open your browser and go to http://localhost:3000 to access the frontend.
The backend runs on http://localhost:5000.

**File Structure
**
flight-booking-system/
├── client/                # Frontend application
│   ├── public/            # Static assets
│   ├── src/               # React components, pages, styles
│   └── package.json       # Client dependencies
├── server/                # Backend application
│   ├── index.js           # Server entry point
│   ├── schemas.js         # MongoDB schemas
│   └── package.json       # Backend dependencies
├── README.md              # Project documentation
└── .gitignore             # Ignored files for version control

**Pages and Functionality
**User Pages:
Login Page: Users can log in using their credentials.
Registration Page: New users can register by providing their details.
Flight Search: Users can search for flights based on destination, date, and other filters.
Flight Booking: Users can select flights, view details, choose seats, and proceed to book.
Flight Operator Page:
Add Flights: Operators can add new flights, including details like destination, departure time, seat availability, and pricing.
Edit Flights: Modify existing flight information, including seat availability and schedule updates.
Manage Flights: Operators have access to a dashboard where they can see all available flights and their current status.
Admin Panel:
All Bookings: Admin users can view a list of all bookings made by users.
Flight Management: Admins can also manage flights similar to flight operators, with the additional capability of viewing user information related to the bookings.

**API Endpoints
**The backend exposes the following key API endpoints:

POST /api/auth/register: Register a new user.
POST /api/auth/login: User login.
GET /api/flights: Fetch all available flights.
POST /api/bookings: Book a flight and confirm seats.
GET /api/admin/flights: Admin endpoint to manage flights.
GET /api/admin/bookings: Admin endpoint to view all bookings.
POST /api/operator/flights: Flight operator endpoint to add flights.
PUT /api/operator/flights/:id: Update flight details by the flight operator.

# 🏥 Prescripto: Full-Stack Doctor Appointment Booking System

## 🌟  Project Overview

Prescripto is a complete, scalable full-stack application for managing doctor appointments, built using the MERN Stack (MongoDB, Express, React, Node.js). It features distinct portals for Patients, Doctors, and an Admin, ensuring comprehensive management of the healthcare ecosystem.

This project was developed by following the comprehensive tutorial series by the GreatStack YouTube channel, and has been successfully deployed using Render.


## ✨ Key Features

The application provides a feature-rich experience across its three dedicated portals:

### 👤 Patient Portal (Frontend)

* **Doctor Search & Filter:**  Browse all available doctors or filter them by specialty (e.g., Dermatologist, General Physician).

* **Appointment Booking:** Select a doctor, choose an available date/time slot, and book an appointment.

* **Profile Management:** Register, login, update personal information, and track all past and upcoming appointments.

* **Online Payments:** Integrated payment gateway (Razorpay/Stripe was implemented in the tutorial) for instant payment of consultation fees.

* **Appointment Actions:** Cancel pending appointments.

### 👨‍⚕️ Doctor Portal

* **Personal Dashboard:**  View total earnings, number of appointments, and total unique patients.

* **Appointment Management:** See a list of all booked appointments. Doctors can mark an appointment as Completed or Cancelled.

* **Availability Control:** Easily update their consultation fee, address, and availability status (Available/Unavailable) which instantly reflects on the patient-facing site.

### 👑 Admin Portal

* **System Overview:** Comprehensive dashboard displaying key metrics like total registered doctors, total appointments, and total patients.

*  **Doctor Management:** Add new doctor profiles, view the list of all registered doctors, and manage their global availability status.

* **Appointment Oversight:** View all appointments booked across the system and cancel any booking if required.


  ## 💻 Tech Stack

| **Component** | **Technology** | **Role** |
|----------------|----------------|-----------|
| **Frontend** | React (with Vite) | Patient-facing application interface. |
| **Admin Panel** | React (with Vite) | Separate application for Admin/Doctor management portals. |
| **Styling** | Tailwind CSS | Utility-first framework for rapid and responsive UI development. |
| **Backend** | Node.js, Express.js | REST API server for handling business logic and data routing. |
| **Database** | MongoDB (Atlas) | Flexible NoSQL database for storing user, doctor, and appointment data. |
| **Authentication** | JWT, bcrypt | Secure user authentication, token generation, and password hashing. |
| **File Storage** | Cloudinary | Cloud-based solution for storing profile images and doctor pictures. |
| **Payment Gateway** | Razorpay / Stripe *(Implemented Razorpay)* | Handling of online consultation fees. |
| **Deployment** | Render | Hosting for all three services (frontend, backend, admin). |


## 📁 Repository Structure

This repository is organized into three main directories, corresponding to the application's core parts:

prescripto-full-stack/
├── * **admin/**  # React application for the Admin & Doctor Dashboards

├── * **backend/**  # Node.js/Express API server

├── * **frontend/** # React application for the Patient Portal (main website)

└── * **README.md**   # Project information file

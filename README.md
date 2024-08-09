# IIITDMJ CSE App

## Overview

The IIITDMJ CSE App is a mobile application developed using React Native and Firebase. It provides a comprehensive solution for managing college-related functionalities, including secure login, an admin dashboard, automated email notifications, and password management features.

## Key Features

- **Secure Login and Authentication:** Utilizes Firebase Authentication for secure user login and registration.
- **Admin Dashboard:** An intuitive dashboard for administrators to manage and view essential metrics.
- **Automated Email Notifications:** Integrated with Nodemailer SMTP server in the backend for sending automatic emails to users.
- **Change Password and Reset Password:** Secure features for users to change and reset their passwords.
- **Native Toast Notifications:** Enhanced user experience with visually appealing toast notifications using `native-toast-notifications`.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **Expo CLI** (for running the app)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/iiitdmj-college-app.git

2. **Navigate to the Project Directory**

   ```bash
   cd iiitdmj-college-app

3. **Install Dependencies**

   ```bash
   npm install

4. **Set Up Firebase**

   - Obtain the Firebase configuration details (such as `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`).
   - Add these configuration details to your env file.

5. **Run the App**

   ```bash
   npx expo start



## Contributing

We welcome contributions to the IIITDMJ College App project. To contribute, please follow these steps:

1. **Fork the Repository**

   Create a fork of the repository on GitHub to work on your changes independently.

   - Visit the [GitHub repository](https://github.com/yourusername/iiitdmj-college-app).
   - Click on the "Fork" button at the top-right corner of the page.

2. **Create a Feature Branch**

   After forking the repository, create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature

3. **Install Dependencies**

   ```bash
   npm install

4. **Set Up Firebase**

   - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration details (such as `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`).
   - Add these configuration details to your project. You will typically do this in a configuration file or directly in your code. Make sure to follow the Firebase setup instructions for your specific platform.

5. **Run the App**

   ```bash
   expo start


## Usage

### Authentication

- **User Registration and Login:**
  - Users can register and log in using Firebase Authentication.
  - Follow the setup in the [Firebase Authentication Documentation](https://firebase.google.com/docs/auth) to configure your authentication methods.

### Admin Dashboard

- **Accessing the Dashboard:**
  - Admins can access the Admin Dashboard to manage users and view essential metrics.
  - Ensure that the admin role is properly configured in your Firebase project to gain access to dashboard features.

### Email Notifications

- **Automatic Emails:**
  - Automatic emails are sent to users for actions such as registration and password changes.
  - Nodemailer is used on the backend for managing email functionalities. Check the [Nodemailer Documentation](https://nodemailer.com/about/) for configuration details.

### Password Management

- **Change Password:**
  - Users can change their passwords within the app. The change password feature is secured and ensures that users can update their credentials safely.

- **Reset Password:**
  - Users who forget their passwords can reset them via a secure process.
  - Ensure that your Firebase project is set up to handle password reset operations according to the [Firebase Password Reset Documentation](https://firebase.google.com/docs/auth/web/password-reset).

### Toast Notifications

- **Enhanced Notifications:**
  - The app uses `native-toast-notifications` to provide visually appealing notifications.
  - Configure the notifications to suit your app’s design by following the guidelines in the [native-toast-notifications Documentation](https://github.com/yourusername/native-toast-notifications).



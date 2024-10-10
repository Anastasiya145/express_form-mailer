# 📧 Form Mailer App

Welcome to the **Form Mailer App**! This is a simple backend application built with **Node.js** and **Express**. It handles form submissions from a frontend and sends the data via email using an email service Resend.

## 🛠 Project Structure

- **Backend**: Node.js + Express
- **Email Service**: Resend API for sending emails.
  
## ⭐ Features

- **Form Submission**: Receives form data (e.g., name, email, subject, message) and sends it to a designated email.
- **Error Handling**: Proper error responses for missing parameters or issues during email delivery.
- **Not Found Route**: Returns a `404 Not Found` error for undefined routes.
- **Global Error Handling**: Catches and logs all server-side errors, returning a `500 Internal Server Error` message when necessary.

## 🔧 Setup & Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/form-mailer-app.git
    ```
   
2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables in a `.env` file:
    ```plaintext
    RESEND_API_KEY=your_resend_api_key
    MY_EMAIL=your_destination_email
    ```

4. Start the server:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:4000`.

## 🔗 Live Demo

- **Backend**: [Sign-In App (Server)](https://express-form-mailer.vercel.app/)
- **Frontend (example where this API was used)**: [Sign-In App (Client)](https://anastasiya145.github.io/portfolio_bulma)

## Usage

- **Submit Form**: Send a `POST` request to `/send` with the form data:
    ```json
    {
      "email": "sender@example.com",
      "name": "John Doe",
      "subject": "Contact Request",
      "message": "Hello! I would like to get in touch."
    }
    ```
    The server will process the request and send an email to the configured address.

- **Error Responses**:
    - `400 Bad Request`: Returned if any required fields are missing in the form.
    - `404 Not Found`: If a route does not exist.
    - `500 Internal Server Error`: If something goes wrong on the server.

## 📬 Contact Me

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/anastasiya-ivanova-494567109/)

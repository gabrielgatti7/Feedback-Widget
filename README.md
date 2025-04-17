# Feedback Widget

The **Feedback Widget** is a complete application for collecting user feedback.

## 🖥️ Preview
<img src="https://github.com/user-attachments/assets/7ba3d675-1ae8-4fec-a927-2a3cce3b4069" alt="Choose Feedback Type" width="400"/>
<img src="https://github.com/user-attachments/assets/39e12a30-1986-4c28-8b31-f5a544d33bc5" alt="Choose Feedback Type" width="400"/>

## ✨ Features

- **Feedback Widget**: An interactive component that allows users to submit feedback categorized as "Problem," "Idea," or "Other."
- **Screenshot Capture**: Users can attach screenshots to their feedback.
- **Email Notifications**: Submitted feedback is sent via email using Nodemailer.
- **Data Persistence**: Feedback is stored in a PostgreSQL database.

## 🛠️ Technologies Used

### Frontend
- **React** with **TypeScript**
- **Vite** for build and development
- **TailwindCSS** for styling

### Backend
- **Node.js** with **Express**
- **Prisma** for ORM
- **Nodemailer** for email notifications
- **PostgreSQL** as the database

## 🚀 How to Run Locally

### Prerequisites
- 🖥️ [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- 🐘 [PostgreSQL](https://www.postgresql.org/download/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-widget.git
   cd feedback-widget
   ```
2. Configure environment variables:
    - In the server directory, create a `.env` file with the following variable:
      ```bash
      DATABASE_URL=your_database_url
      ```
   - In the web directory, create a `.env.local` file with:
     ```bash
     VITE_API_URL=http://localhost:3333
     ```
3. Install dependencies:
    - In the server directory:
      ```bash
      npm install
      ```
    - In the web directory:
      ```bash
      npm install
      ```
4. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```
5. Start the backend:
    ```bash
    npm run dev
    ```
6. Start the frontend:
    ```bash
    npm run dev
    ```
7. Access the application in your browser:
    - 🌐 Frontend: http://localhost:5173
    - 🌐 Backend: http://localhost:3333

## 📖 Reference

This project was designed and inspired by [Rocketseat](https://www.rocketseat.com.br/). You can access the original design on [Figma](https://www.figma.com/design/HiUsu8qHKIpfOTnNFkBaQ2/Feedback-Widget--Community-?node-id=100-2114&p=f&t=HIn1d0pNslb2SAe1-0).

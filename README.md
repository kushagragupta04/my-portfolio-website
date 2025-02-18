# Portfolio Website

A modern and responsive **personal portfolio** built with **React, Tailwind CSS, and Vite** to showcase projects, skills, and achievements.

## 🚀 Live Demo
[View Portfolio](https://kushagragupta.vercel.app/)

## 📌 Features
- **Responsive Design** – Looks great on all devices.
- **Dark Mode** – Toggle between light and dark themes.
- **Projects Showcase** – Displays featured projects with links to live demos and code repositories.
- **Smooth Animations** – Subtle transitions and hover effects for a sleek UI.
- **Contact Form** – Integrated with EmailJS for direct messaging.

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Vite
- **Email Handling:** EmailJS
- **Deployment:** Vercel

## 📂 Folder Structure
```
portfolio/
│── public/
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main pages (Home, Projects, Contact, etc.)
│   ├── assets/        # Images and static assets
│   ├── App.jsx        # Main application file
│   ├── main.jsx       # React root file
│── .env               # Environment variables (not committed)
│── package.json       # Project dependencies
│── tailwind.config.js # Tailwind CSS configuration
│── vite.config.js     # Vite configuration
```

## ⚡ Installation & Setup
1. **Clone the repository**
   ```sh
   git clone YOUR_REPO_URL
   cd portfolio
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory and add:
     ```sh
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
4. **Run locally**
   ```sh
   npm run dev
   ```
5. **Build for production**
   ```sh
   npm run build
   ```

## 🚀 Deployment
This project is deployed using **Vercel**. To deploy:
1. Push the code to a GitHub repository.
2. Connect the repo to Vercel.
3. Vercel will automatically build and deploy your site.

## 📝 License
This project is open-source and available under the **MIT License**.

---
Made with ❤️ by Kushagra Gupta


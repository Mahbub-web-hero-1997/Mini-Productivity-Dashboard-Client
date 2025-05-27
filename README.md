# 📝 Task Manager App

A responsive and modern task management web application built with React. Users can register/login, create tasks, manage their status (incomplete/completed), and track productivity visually via a dashboard.

🔗 **Live Site**: [https://task-manager-client-zeta-five.vercel.app/](https://task-manager-client-zeta-five.vercel.app/)

---

## 🚀 Features

- ✅ **User Authentication**
  - Register & Login (with cookie-based session)
- 📋 **Task Management**
  - Create, Read, Update, Delete (CRUD) tasks
  - Toggle task completion status
- 📊 **Dashboard**
  - Task statistics using charts
- 📂 **Task Views**
  - All Tasks
  - Completed Tasks
  - Incomplete Tasks
- ⚙️ **Settings & Help Sections**
- 💡 **Responsive Design**
  - Fully optimized for desktop, tablet, and mobile

---## 🚀 Folder Structure
src/
│
├── assets/                # Static files (images, etc.)
├── component/             # All React UI components
│   ├── Header/            # Header/Nav component
│   ├── Login.jsx          # User login page
│   ├── Register.jsx       # User registration page
│   ├── AllTasks.jsx       # Displays all tasks
│   ├── CompletedTask.jsx  # Displays completed tasks
│   ├── IncompleteTask.jsx # Displays incomplete tasks
│
├── globalState/           # Global context for Auth and App state
│   └── AuthProvider.jsx
│
├── hook/                  # Custom React hooks
│   └── UseAxios.js
│
├── pages/                 # Route-level page components (optional)
│
├── App.jsx                # Main App component with routes
├── main.jsx               # Entry point
└── index.css              # TailwindCSS + DaisyUI config

## 🛠️ Tech Stack

| Tech                | Description                    |
| ------------------- | ------------------------------ |
| React               | Frontend library               |
| React Router        | Routing between pages          |
| Tailwind CSS        | Utility-first styling          |
| DaisyUI             | Component library for Tailwind |
| Axios               | API communication              |
| SweetAlert2         | Toast notifications            |
| React Hook Form     | Form handling and validation   |
| Chart.js / Recharts | Task analytics (Dashboard)     |
| React Icons         | Icon library                   |

---

## 🧪 Pages

- `/` – Dashboard (Overview of tasks and stats)
- `/login` – User login
- `/register` – User registration
- `/all-task` – List of all tasks
- `/completed` – Completed tasks
- `/incomplete` – Incomplete tasks
- `/settings` – Account preferences
- `/help` – FAQ or support info

---

## 📦 Installation (For Local Development)

```bash
# Clone the repository
git clone https://github.com/Mahbub-web-hero-1997/Task-manager-client
cd task-manager

# Install dependencies
npm install

# Start the development server
npm run dev
```

# Project RootAuth

A **Node.js Authentication System** with secure **login**, **registration**, and **role-based access control**, using **Express**, **MongoDB**, and **JWT**.

---

## 📂 Features

✅ User Registration (with hashed passwords)  
✅ Secure Login with JWT Token  
✅ Protected Routes (requires valid token)  
✅ Role-Based Access (admin routes)  
✅ Simple Frontend Pages (`register.html`, `login.html` etc.)  
✅ Dark Mode Styling (optional)  
✅ Easily extendable

---

## 🗂️ Project Structure

project-rootauth/
├── models/
│ └── User.js
├── routes/
│ ├── auth.js
│ ├── protected.js
│ ├── admin.js
├── middleware/
│ └── authMiddleware.js
├── public/
│ ├── register.html
│ ├── login.html
│ ├── dashboard.html
│ ├── protected.html
│ ├── profile.html
│ ├── style.css
├── .env
├── server.js
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

1️⃣ Clone this repository:
```bash
git clone https://github.com/yourusername/project-rootauth.git
cd project-rootauth
node server.js

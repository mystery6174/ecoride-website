# 🛴 EcoRide - Electric Scooter Rental Website

An eco-friendly, modern, and interactive website for electric scooter rentals. Built with clean HTML5, CSS3, and JavaScript.

![EcoRide Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

- **Dynamic Hero Section**: Clean tagline, compelling call-to-actions, live statistics, and custom CSS-crafted scooter animation.
- **Scooter Showcase**: Interactive model catalog (EcoRide Lite, Pro, and Max) with specifications, pricing in ₹, and instant "Book Now" hooks.
- **Interactive Booking System**:
  - Automatically pre-selects the scooter when clicked from the catalog.
  - Automatically disables past dates in the date selector.
  - Form validation with localStorage persistence for recent bookings.
- **Services & About Us**: Highlights key benefits such as GPS tracking, easy charging, regular maintenance, and zero-emission travel.
- **Customer Reviews**: Testimonials with star rating displays.
- **Contact & Inquiry Form**: Interactive contact form with status feedback.
- **Fully Responsive**: Mobile-first responsive navigation bar with hamburger menu toggle.

---

## 🚀 How to Run Locally

### Option 1: Open directly in your browser
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Run with Python HTTP Server
```bash
python -m http.server 5173
```
Then visit: [http://localhost:5173](http://localhost:5173)

### Option 3: Run with Node / npx serve
```bash
npx serve .
```

---

## 🌐 Publishing to GitHub Pages

1. **Initialize Git & Commit**:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit: EcoRide website"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub: Create New Repository](https://github.com/new).
   - Enter repository name (e.g., `e-scooty-website`).
   - Keep it Public.
   - Do **not** initialize with README or .gitignore (already included here).
   - Click **Create repository**.

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repository, go to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment > Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Your website will be live in ~1 minute at:
     `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

---

## 📁 Project Structure

```text
E SCOOTY WEBSITE/
├── index.html       # Semantic HTML5 markup
├── style.css        # Clean responsive CSS3 styles
├── script.js        # Interactive booking & navigation logic
├── .gitignore       # Ignored build & system files
└── README.md        # Documentation and deployment guide
```

---

## 📄 License
This project is open-source and free to use.

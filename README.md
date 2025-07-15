# 🚨 SafeZone – Emergency Assistant App

**SafeZone** is a modern, responsive React-based emergency assistant web app that helps users share their location, view helpful emergency tips, check network status, and preview their position on a live map.

### 🌐 Live Demo
[Click here to view the live app](https://safezone-app.vercel.app)

---

## 📌 Features

- 📍 **Live Geolocation** – Detects and displays the user’s current coordinates
- 🗺️ **Google Maps + Leaflet Preview** – View your position on a live map
- 📡 **Network Information** – Shows your connection type and speed
- 👀 **Scroll-Triggered Tips** – Tips appear as users scroll using Intersection Observer
- 🔦 **Dark Mode Toggle** – Switch between light and dark themes
- 🧠 **Practical Emergency Facts** – Real-world survival tips for critical situations
- 📋 **Clipboard Support** – Copy your Google Maps location with one click

---

## 🚀 Technologies & APIs Used

### 👨‍💻 Stack
- React (via Vite)
- React Router
- Leaflet (map preview)
- Tailwind CSS (optional styling)

### 🌐 Web APIs
- ✅ [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- ✅ [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
- ✅ [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- ✅ [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

## 📂 Project Structure

```
safezone-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Location.jsx
│   │   ├── NetworkStatus.jsx
│   │   ├── Tips.jsx
│   │   ├── DarkModeToggle.jsx
│   │   └── MapPreview.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🛠 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/yourusername/safezone-app.git
cd safezone-app

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 Deployment

This app is deployed on **Vercel**. It uses:

- `npm run build` to generate the `dist/` folder
- `dist/` is automatically hosted as a static site

---

## 🙌 Acknowledgements

- OpenStreetMap for map tiles
- MDN Web Docs for Web API documentation

---

## 🧑‍🎓 Ideal For

This project is perfect for:
- College portfolio submissions
- Frontend/web developer interviews
- Demonstrating real-world use of browser APIs

---

> Built with 💙 to help in moments when technology can make a life-saving difference.
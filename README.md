# Timer ⏱️

A simple and elegant **timer web app** built using HTML, CSS, and JavaScript.  
This project demonstrates basic DOM manipulation, event-driven programming, and a clean, responsive UI component design.

---

## 📖 Description

This timer allows users to **start**, **pause**, **resume**, and **reset** time counting in a minimal interface.  
It’s ideal for beginners learning about:
- JavaScript DOM operations
- Handling multiple button states
- Updating UI dynamically
- Responsive and modern CSS styling

---

## 🧩 Features

- Start, Pause, Resume, and Reset functionality  
- Time increments in minutes and seconds (MM:SS format)  
- Button state transitions with smooth effects  
- Simple, responsive, card-style UI  
- No external libraries — fully vanilla JavaScript  

---

## 🧠 Concepts Covered

- `setInterval()` and `clearInterval()` for time control  
- DOM selection (`querySelector`, `getElementById`)  
- Dynamic element updates via `innerHTML`  
- CSS transitions and hover effects  
- Conditional button visibility (`style.display`)  

---
timer-project/
│
├── index.html # Main HTML file defining the structure
├── style.css # Styling for buttons, layout, and design
└── script.js # Timer logic and event handling

---

## ⚙️ How It Works

1. **Start** — Begins counting up every second.  
2. **Pause** — Stops the current count without resetting.  
3. **Resume** — Continues counting from where it paused.  
4. **Reset** — Clears time and brings UI back to its initial state.  

The display updates in real time using JavaScript’s `setInterval()` function, converting total seconds into minutes and seconds.

---

## 🖥️ Preview

When opened in a browser, the timer shows:

+----------------------+
| Timer |
| 00:00 |
| [Reset] [Start]|
+----------------------+


Only relevant buttons are shown depending on the state (Start → Pause → Resume → etc.)

---

## 🎨 UI Highlights

- **Font:** Arial / Helvetica  
- **Color Palette:**
  - Background: Light gray `#f4f6f9`
  - Primary blue display: `#2563eb`
  - Green Start: `#16C47F`
  - Yellow Pause: `#FFD65A`
  - Orange Resume: `#FF9D23`
  - Red Reset: `#F93827`
- **Effects:** Smooth hover scaling, subtle shadows, and rounded elements  

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/your-username/timer-project.git

### 2. Open in Browser
Just open `index.html` in your preferred browser — no setup or dependencies required.

---

## 🧰 Tech Stack

- **HTML5:** Structure and layout  
- **CSS3:** Styling and responsive design  
- **JavaScript (ES6):** Logic and interactivity  

---

## 🪄 Future Improvements

You can expand this project by:
- Adding a countdown mode  
- Including milliseconds display  
- Introducing sound or vibration alerts  
- Implementing dark mode toggle  

---

## 👨‍💻 Author

Developed by **Vedant Parashar** — *CSE Student & Frontend Developer*  
If you found this helpful, ⭐ the repo and share your improvements!

---

## 📄 License

This project is open source and available under the **MIT License**.

## 🗂️ Project Structure


const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load dark mode from saved preference
if (localStorage.getItem("darkMode") === "enabled") {
body.classList.add("dark-mode");
toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
body.classList.toggle("dark-mode");

if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("darkMode", "enabled");
} else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("darkMode", "disabled");
}
});
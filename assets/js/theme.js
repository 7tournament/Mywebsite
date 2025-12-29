/* =========================
   THEME CONFIG
========================= */
const THEMES = {
  default: {
    "--bg": "#0b0f1a",
    "--accent": "#3aa0ff",
    "--card": "rgba(15,20,40,0.95)",
    "--sidebar-bg": "linear-gradient(135deg,#0b0f1a,#1a1f2a)",
    "--sidebar-text": "#ffffff",
    "--sidebar-hover": "#3aa0ff",
    "--wa-bg": "#3aa0ff",
    star: "#3aa0ff"
  },

  neon: {
    "--bg": "#001a12",
    "--accent": "#00ff99",
    "--card": "rgba(0,30,20,0.95)",
    "--sidebar-bg": "linear-gradient(135deg,#001a12,#003322)",
    "--sidebar-text": "#00ff99",
    "--sidebar-hover": "#00ff99",
    "--wa-bg": "#00ff99",
    star: "#00ff99"
  },

  purple: {
    "--bg": "#1a001f",
    "--accent": "#bb00ff",
    "--card": "rgba(20,0,40,0.95)",
    "--sidebar-bg": "linear-gradient(135deg,#1a001f,#400040)",
    "--sidebar-text": "#bb00ff",
    "--sidebar-hover": "#bb00ff",
    "--wa-bg": "#bb00ff",
    star: "#bb00ff"
  },

  ocean: {
    "--bg": "#001f2f",
    "--accent": "#00ccff",
    "--card": "rgba(0,15,40,0.95)",
    "--sidebar-bg": "linear-gradient(135deg,#001f2f,#003b5f)",
    "--sidebar-text": "#00ccff",
    "--sidebar-hover": "#00ccff",
    "--wa-bg": "#00ccff",
    star: "#00ccff"
  },

  emerald: {
    "--bg": "#001f1a",
    "--accent": "#00ff88",
    "--card": "rgba(0,30,20,0.95)",
    "--sidebar-bg": "linear-gradient(135deg,#001f1a,#003322)",
    "--sidebar-text": "#00ff88",
    "--sidebar-hover": "#00ff88",
    "--wa-bg": "#00ff88",
    star: "#00ff88"
  }
};

/* =========================
   APPLY THEME
========================= */
function applyTheme(name) {
  const theme = THEMES[name] || THEMES.default;

  Object.entries(theme).forEach(([key, value]) => {
    if (key === "star") return;
    document.documentElement.style.setProperty(key, value);
  });

  // Sync star background if exists
  if (typeof window.starColor !== "undefined") {
    window.starColor = theme.star;
  }

  localStorage.setItem("siteTheme", name);
}

/* =========================
   LOAD SAVED THEME
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("siteTheme") || "default";
  applyTheme(savedTheme);
});

/* =========================
   OPTIONAL: BUTTON HOOK
========================= */
// Usage example:
// <button onclick="setTheme('neon')">Neon</button>
function setTheme(name) {
  applyTheme(name);
}

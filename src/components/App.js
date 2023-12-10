import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [theme, setTheme] = useState("light"); // State variable for theme

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle theme state
  };

  return (
    <div className="App">
      <h1>Newton School</h1>
      <div>
        <form>
          <label>UserName</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <button>Login</button>
        </form>
      </div>
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <input
        type="checkbox"
        id="switch"
        checked={theme === "dark"} // Set checkbox state based on theme
        onChange={handleToggleTheme} // Update theme on checkbox change
      />
      <label for="switch" className="label">
        Toggle
      </label>
    </div>
  );
}

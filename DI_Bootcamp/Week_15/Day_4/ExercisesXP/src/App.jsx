import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import CharacterCounter from "./CharacterCounter";
import TodoList from "./TodoList";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ThemeProvider>
        <div className="App">
          <h1>Exercise 1</h1>
          <h2>Theme Switcher Example</h2>
          <ThemeSwitcher />
        </div>
      </ThemeProvider>
      <CharacterCounter />
      <TodoList />
    </div>
  );
}

export default App;
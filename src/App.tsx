import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

export function App(): JSX.Element {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>XYZ</h1>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

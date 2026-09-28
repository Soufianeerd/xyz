import { useState, type JSX } from "react";
import { Outlet } from "react-router-dom";
import type { Tweet } from "./types/Tweet";
import { initialTweets } from "./data/tweets";
import { TweetsContext } from "./contexts/TweetsContext";
import "./App.css";

export function App(): JSX.Element {
  const [tweets] = useState<Array<Tweet>>(initialTweets);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>XYZ</h1>
      </header>
      <main className="app-main">
        <TweetsContext.Provider value={{ tweets }}>
          <Outlet />
        </TweetsContext.Provider>
      </main>
    </div>
  );
}

export default App;

import type React from "react";
import { initialTweets } from "./data/tweets";
import { TweetsList } from "./components/TweetsList";
import "./App.css";

export function App(): React.JSX.Element {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>XYZ</h1>
      </header>
      <main className="app-main">
        <TweetsList tweets={initialTweets} />
      </main>
    </div>
  );
}

export default App;

import { useState, type JSX } from "react";
import { Outlet, Link } from "react-router-dom";
import type { Tweet } from "./types/Tweet";
import { initialTweets } from "./data/tweets";
import { TweetsContext } from "./contexts/TweetsContext";
import "./App.css";

export function App(): JSX.Element {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  function addTweet(content: string): void {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };
    setTweets((prev) => [newTweet, ...prev]);
  }

  function toggleLike(id: string): void {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id !== id) {
          return tweet;
        }
        const nextLikedByMe = !tweet.likedByMe;
        return {
          ...tweet,
          likedByMe: nextLikedByMe,
          likes: nextLikedByMe ? tweet.likes + 1 : tweet.likes - 1,
        };
      }),
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/" className="app-brand-link">
          <img src="/favicon.svg" alt="Logo XYZ" className="app-logo" width="36" height="36" />
          <h1 className="app-title">XYZ</h1>
        </Link>
        <nav className="app-nav">
          <Link to="/" className="app-nav-link">
            Fil
          </Link>
          <Link to="/a-propos" className="app-nav-link">
            À propos
          </Link>
        </nav>
      </header>
      <main className="app-main">
        <TweetsContext.Provider value={{ tweets, addTweet, toggleLike }}>
          <Outlet />
        </TweetsContext.Provider>
      </main>
    </div>
  );
}

export default App;

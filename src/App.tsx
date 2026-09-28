import { useState, type JSX } from "react";
import { Outlet } from "react-router-dom";
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
        <h1>XYZ</h1>
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

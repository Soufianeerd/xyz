import { useContext, type JSX } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function TweetsMasterPage(): JSX.Element {
  useDocumentTitle("Accueil");

  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets, addTweet, toggleLike } = context;
  const mainTweets = tweets.filter((tweet) => !tweet.parentId);
  const totalLikes = mainTweets.reduce((acc, tweet) => acc + tweet.likes, 0);

  return (
    <section className="tweets-master-page">
      <TweetForm onSubmit={addTweet} />

      <div className="feed-stats-bar">
        <span>{totalLikes} mention{totalLikes > 1 ? "s" : ""} J'aime sur le fil</span>
      </div>

      <TweetsList tweets={mainTweets} onToggleLike={toggleLike} />
    </section>
  );
}

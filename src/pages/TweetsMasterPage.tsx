import { useContext, type JSX } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";

export function TweetsMasterPage(): JSX.Element {
  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets, addTweet } = context;
  const mainTweets = tweets.filter((tweet) => !tweet.parentId);

  return (
    <section className="tweets-master-page">
      <TweetForm onSubmit={addTweet} />
      <TweetsList tweets={mainTweets} />
    </section>
  );
}

import { useContext, type JSX } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";

export function TweetsMasterPage(): JSX.Element {
  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets } = context;
  const mainTweets = tweets.filter((tweet) => !tweet.parentId);

  return (
    <section className="tweets-master-page">
      <TweetsList tweets={mainTweets} />
    </section>
  );
}

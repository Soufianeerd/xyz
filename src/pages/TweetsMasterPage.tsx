import type { JSX } from "react";
import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

export function TweetsMasterPage(): JSX.Element {
  const mainTweets = initialTweets.filter((tweet) => !tweet.parentId);

  return (
    <section className="tweets-master-page">
      <TweetsList tweets={mainTweets} />
    </section>
  );
}

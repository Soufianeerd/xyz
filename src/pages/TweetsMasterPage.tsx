import type { JSX } from "react";
import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";

export function TweetsMasterPage(): JSX.Element {
  return (
    <section className="tweets-master-page">
      <TweetsList tweets={initialTweets} />
    </section>
  );
}

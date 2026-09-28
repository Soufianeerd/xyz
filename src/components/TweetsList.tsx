import type React from "react";
import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetsListProps = {
  tweets: Array<Tweet>;
};

export function TweetsList({ tweets }: TweetsListProps): React.JSX.Element {
  return (
    <div className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

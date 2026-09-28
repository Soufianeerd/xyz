import type { JSX } from "react";
import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetsListProps = {
  tweets: Array<Tweet>;
  onToggleLike?: (id: string) => void;
};

export function TweetsList({
  tweets,
  onToggleLike,
}: TweetsListProps): JSX.Element {
  return (
    <div className="tweets-list">
      {tweets.map((tweet) => (
        <TweetPreview
          key={tweet.id}
          tweet={tweet}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
}

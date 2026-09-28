import type React from "react";
import type { Tweet } from "../types/Tweet";

export type TweetPreviewProps = {
  tweet: Tweet;
};

export function TweetPreview({ tweet }: TweetPreviewProps): React.JSX.Element {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="tweet-card">
      <header className="tweet-header">
        <span className="tweet-author-name">{tweet.authorName}</span>
        <span className="tweet-author-handle">@{tweet.authorHandle}</span>
        <time className="tweet-date" dateTime={tweet.createdAt}>
          · {formattedDate}
        </time>
      </header>

      {tweet.image && (
        <img
          src={tweet.image.url}
          alt={tweet.image.alt}
          className="tweet-image"
        />
      )}

      <p className="tweet-content">{tweet.content}</p>
    </article>
  );
}

import { useState, type JSX } from "react";
import type { Tweet } from "../types/Tweet";

export type TweetPreviewProps = {
  tweet: Tweet;
};

export function TweetPreview({ tweet }: TweetPreviewProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const formattedDate = new Date(tweet.createdAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const MAX_LENGTH = 180;
  const isLong = tweet.content.length > MAX_LENGTH;
  const displayedContent =
    isLong && !isExpanded ? tweet.content.slice(0, MAX_LENGTH) : tweet.content;

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

      <p className="tweet-content">{displayedContent}</p>

      {isLong && (
        <button
          type="button"
          className="tweet-expand-button"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </article>
  );
}

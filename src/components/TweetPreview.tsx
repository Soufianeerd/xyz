import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import type { Tweet } from "../types/Tweet";

export type TweetPreviewProps = {
  tweet: Tweet;
  linkToDetail?: boolean;
};

export function TweetPreview({
  tweet,
  linkToDetail = true,
}: TweetPreviewProps): JSX.Element {
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

      {tweet.image &&
        (linkToDetail ? (
          <Link to={`/tweets/${tweet.id}`} className="tweet-image-link">
            <img
              src={tweet.image.url}
              alt={tweet.image.alt}
              className="tweet-image"
            />
          </Link>
        ) : (
          <img
            src={tweet.image.url}
            alt={tweet.image.alt}
            className="tweet-image"
          />
        ))}

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

      {linkToDetail && (
        <footer className="tweet-footer">
          <Link to={`/tweets/${tweet.id}`} className="tweet-detail-link">
            Voir la discussion
          </Link>
        </footer>
      )}
    </article>
  );
}

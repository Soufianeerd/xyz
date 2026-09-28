import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { Avatar } from "./Avatar";

export type TweetPreviewProps = {
  tweet: Tweet;
  linkToDetail?: boolean;
  onToggleLike?: (id: string) => void;
};

export function TweetPreview({
  tweet,
  linkToDetail = true,
  onToggleLike,
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
        <Avatar name={tweet.authorName} />
        <div className="tweet-header-info">
          <span className="tweet-author-name">{tweet.authorName}</span>
          <span className="tweet-author-handle">@{tweet.authorHandle}</span>
          <time className="tweet-date" dateTime={tweet.createdAt}>
            · {formattedDate}
          </time>
        </div>
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

      <footer className="tweet-footer">
        <div className="tweet-actions">
          <button
            type="button"
            className={`tweet-like-button ${tweet.likedByMe ? "tweet-liked" : ""}`}
            onClick={() => onToggleLike?.(tweet.id)}
          >
            {tweet.likedByMe ? "Je n'aime plus" : "J'aime"} ({tweet.likes})
          </button>
        </div>

        {linkToDetail && (
          <Link to={`/tweets/${tweet.id}`} className="tweet-detail-link">
            Voir la discussion
          </Link>
        )}
      </footer>
    </article>
  );
}

import type { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";

export function TweetDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const tweet = initialTweets.find((t) => t.id === id);

  if (!tweet) {
    return (
      <div className="not-found-container">
        <p>Ce tweet n'existe pas</p>
        <Link to="/" className="back-link">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="tweet-details-page">
      <nav className="details-nav">
        <Link to="/" className="back-link">
          ← Retour au fil
        </Link>
      </nav>
      <TweetPreview tweet={tweet} linkToDetail={false} />
    </div>
  );
}

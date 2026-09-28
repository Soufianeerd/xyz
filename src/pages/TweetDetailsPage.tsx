import { useContext, type JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";

export function TweetDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets } = context;
  const tweet = tweets.find((t) => t.id === id);

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

  const replies = tweets.filter((t) => t.parentId === id);

  return (
    <div className="tweet-details-page">
      <nav className="details-nav">
        <Link to="/" className="back-link">
          ← Retour au fil
        </Link>
      </nav>

      <TweetPreview tweet={tweet} linkToDetail={false} />

      <section className="replies-container">
        <h2>Réponses</h2>
        {replies.length > 0 ? (
          <TweetsList tweets={replies} />
        ) : (
          <p className="no-replies-message">Aucune réponse pour le moment.</p>
        )}
      </section>
    </div>
  );
}

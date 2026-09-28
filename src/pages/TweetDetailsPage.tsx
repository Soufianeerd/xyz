import { useContext, type JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function TweetDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets, toggleLike } = context;
  const tweet = tweets.find((t) => t.id === id);

  const title = tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable";
  useDocumentTitle(title);

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
      {/* Bonus TD02 : Fil d'Ariane */}
      <nav className="breadcrumbs-nav" aria-label="Fil d'Ariane">
        <Link to="/" className="breadcrumb-link">
          Accueil
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Tweet de {tweet.authorName}</span>
      </nav>

      <TweetPreview
        tweet={tweet}
        linkToDetail={false}
        onToggleLike={toggleLike}
      />

      <section className="replies-container">
        <h2>Réponses ({replies.length})</h2>
        {replies.length > 0 ? (
          <TweetsList tweets={replies} onToggleLike={toggleLike} />
        ) : (
          <p className="no-replies-message">Aucune réponse pour le moment.</p>
        )}
      </section>
    </div>
  );
}

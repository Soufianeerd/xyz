import { useContext, useState, type JSX } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function TweetsMasterPage(): JSX.Element {
  useDocumentTitle("Accueil");

  const [selectedAuthor, setSelectedAuthor] = useState<string>("");

  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("TweetsContext must be used within TweetsProvider");
  }

  const { tweets, addTweet, toggleLike } = context;

  // Tweets principaux (sans parentId)
  const mainTweets = tweets.filter((tweet) => !tweet.parentId);

  // Bonus TD01 : Tri du plus récent au plus ancien sans muter le tableau source
  const sortedTweets = [...mainTweets].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );

  // Bonus TD03 : Filtrage par auteur
  const authors = Array.from(new Set(mainTweets.map((t) => t.authorName)));
  const displayedTweets = selectedAuthor
    ? sortedTweets.filter((t) => t.authorName === selectedAuthor)
    : sortedTweets;

  // Bonus TD01 : Statistiques dérivées
  const totalLikes = mainTweets.reduce((acc, tweet) => acc + tweet.likes, 0);

  return (
    <section className="tweets-master-page">
      <TweetForm onSubmit={addTweet} />

      <div className="feed-stats-bar">
        <div className="stats-counters">
          <span>{mainTweets.length} tweets</span>
          <span>·</span>
          <span>{totalLikes} J'aime</span>
        </div>

        <div className="author-filter">
          <label htmlFor="author-select" className="visually-hidden">
            Filtrer par auteur
          </label>
          <select
            id="author-select"
            className="author-select"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <option value="">Tous les auteurs ({authors.length})</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TweetsList tweets={displayedTweets} onToggleLike={toggleLike} />
    </section>
  );
}

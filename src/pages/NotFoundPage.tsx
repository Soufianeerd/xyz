import type { JSX } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-container">
      <h2>Page introuvable</h2>
      <p>L'adresse demandée n'existe pas.</p>
      <Link to="/" className="back-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}

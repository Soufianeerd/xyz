import type { JSX } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function AboutPage(): JSX.Element {
  useDocumentTitle("À propos");

  return (
    <div className="about-page-container">
      <nav className="details-nav">
        <Link to="/" className="back-link">
          ← Retour au fil
        </Link>
      </nav>

      <article className="about-card">
        <h2>À propos de XYZ</h2>
        <p>
          <strong>XYZ</strong> est une application Web développée dans le cadre de l'UE
          Programmation Web en Licence 3 MIASHS (2026/2027) à l'Université de Lorraine.
        </p>

        <h3>Architecture & Technologies</h3>
        <ul>
          <li><strong>React 19 & TypeScript</strong> : Composants fonctionnels et typage strict.</li>
          <li><strong>React Router</strong> : Navigation SPA déclarative et paramètres d'URL.</li>
          <li><strong>Contexte React</strong> : Gestion de l'état global et actions immuables.</li>
          <li><strong>Vite & Bun</strong> : Environnement de build et gestionnaire de dépendances rapide.</li>
          <li><strong>Oxlint</strong> : Analyse statique de code performante.</li>
        </ul>

        <h3>Fonctionnalités</h3>
        <p>
          Fil de tweets interactif, consultation détaillée des discussions et des réponses,
          publication de nouveaux messages avec contrôle de saisie en temps réel et système de
          mentions J'aime synchronisé.
        </p>
      </article>
    </div>
  );
}

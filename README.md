# XYZ — Projet individuel de Programmation Web

**Formation :** L3 MIASHS — Université de Lorraine (IDMC)  
**Année universitaire :** 2026 / 2027  
**Étudiant :** Soufiane EL RHADI  
**Contact :** soufiane.erd@gmail.com  
**Dépôt GitHub :** [https://github.com/Soufianeerd/xyz.git](https://github.com/Soufianeerd/xyz.git)

---

## Présentation du projet

**XYZ** est une application web de réseau social monopage (SPA) développée avec **React 19**, **TypeScript**, **Vite** et **Bun**, conformément aux enseignements de l'UE Programmation Web. L'application respecte les principes de la programmation déclarative et fonctionnelle, avec un typage statique strict et une gestion d'état centralisée et immuable.

---

## Récapitulatif par étape / TD

### Étape 01 — Modélisation et affichage du fil de tweets

* **Éléments obligatoires réalisés :**
  - Modélisation du type `TweetImage` (`url`, `alt`) et du type produit `Tweet` (`id`, `authorName`, `authorHandle`, `content`, `image?`, `createdAt`).
  - Jeu de données initial dans `src/data/tweets.ts` avec 10 tweets distincts, respectant les contraintes (dates ISO 8601, URLs HTTPS d'Ada Lovelace et Grace Hopper, tweets de plus de 180 caractères).
  - Composant `TweetPreview` avec props typées, type de retour explicite et affichage conditionnel strict de l'image au-dessus du texte via l'opérateur `&&`.
  - Composant `TweetsList` utilisant `.map()` avec `key={tweet.id}` stable (aucun index de tableau).
  - Mécanisme "Voir plus / Voir moins" avec `useState<boolean>`, calcul conditionnel du texte tronqué à 180 caractères, et inversion d'état via la forme fonctionnelle du setter.
* **Bonus réalisés :**
  - Extraction d'un composant réutilisable `Avatar` affichant les initiales de chaque auteur.
  - Tri antichronologique des tweets (du plus récent au plus ancien) sans mutation du tableau source via `localeCompare`.
  - Compteur dynamique du nombre total de tweets du fil.
* **Difficultés & solutions :**
  - *Gestion de la clé de réconciliation React :* Veiller à toujours propager l'UUID unique `tweet.id` en tant que `key` plutôt que l'index, pour garantir la stabilité de l'arbre lors des tris et des ajouts.

---

### Étape 02 — Navigation et réponses (Master / Detail)

* **Éléments obligatoires réalisés :**
  - Installation et configuration de `react-router-dom` avec `BrowserRouter`, `Routes`, `Route`.
  - Transformation de `App.tsx` en layout partagé avec conservation du header et rendu via `<Outlet />`.
  - Création des pages `TweetsMasterPage` (`/`), `TweetDetailsPage` (`/tweets/:id`) et `NotFoundPage` (`*`).
  - Navigation interne fluide avec le composant `Link` (texte "Voir la discussion" et image cliquable).
  - Récupération du paramètre d'URL dynamique avec `useParams<{ id: string }>()`.
  - Gestion de la prop `linkToDetail?: boolean` sur `TweetPreview` (désactivée sur la page de détail pour éviter les liens récursifs).
  - Extension du modèle `Tweet` avec `parentId?: string` et ajout de réponses associées à deux tweets distincts.
  - Séparation stricte : le fil principal n'affiche que les tweets sans `parentId`, la page de détail affiche le tweet principal et sa liste de réponses (avec message informatif si aucune réponse).
* **Bonus réalisés :**
  - Route et page dédiée `/a-propos` (`AboutPage`) accessible depuis le menu de navigation.
  - Fil d'Ariane (*breadcrumbs*) sur la page de détail (`Accueil › Tweet de <auteur>`).
* **Difficultés & solutions :**
  - *Désactivation des liens sur la vue détaillée :* L'ajout de la prop `linkToDetail={false}` a permis de factoriser le composant `TweetPreview` tout en conditionnant l'encapsulation de l'image et l'apparition du lien de discussion.

---

### Étape 03 — Gestion d'état global, publication et identité visuelle

* **Éléments obligatoires réalisés :**
  - Extension du modèle avec `likes: number` et `likedByMe: boolean` sur tous les tweets du jeu de données.
  - Gestion de l'état global des tweets au sommet de l'arbre dans `App` (`useState<Array<Tweet>>`).
  - Création et diffusion du contexte `TweetsContext` (`TweetsContext.Provider` enveloppant `Outlet`).
  - Suppression de tout import direct de données statiques dans les pages : consommation exclusive via `useContext(TweetsContext)`.
  - Formulaire contrôlé de publication `TweetForm` avec `textarea`, limite stricte de 280 caractères, compteur de caractères restants et désactivation automatique du bouton si le contenu est vide ou dépasse la limite.
  - Fonction `addTweet` ajoutant le nouveau tweet en tête de liste (`setTweets(prev => [newTweet, ...prev])`) avec `crypto.randomUUID()`, nom "Vous" et horodatage ISO 8601.
  - Fonction `toggleLike` avec mise à jour immuable (`.map()`, copie via spread operator, mise à jour synchrone de `likedByMe` et du compteur `likes`).
  - Synchronisation en temps réel des likes entre la page d'accueil, la page de détail et les réponses.
  - Compteur global de mentions J'aime du fil dérivé dynamiquement avec `.reduce()`.
  - Hook personnalisé `useDocumentTitle` utilisant `useEffect` pour mettre à jour `document.title` dynamiquement (`Accueil | XYZ`, `Tweet de <auteur> | XYZ`, `Page introuvable | XYZ`).
  - Respect strict des règles des Hooks React (appel inconditionnel de `useDocumentTitle` avant tout retour anticipé).
  - Charte graphique XYZ complète basée sur la palette imposée (`#6ec7ea`, `#51b1ce`, `#e6e6e6`, `#ff4370`, `#e52e62`, `#000000`), avec intégration du logo officiel dans le header et favicon SVG configuré.
* **Bonus réalisés :**
  - Filtre interactif par auteur sur la page d'accueil avec calcul automatique de la liste des auteurs distincts.
* **Difficultés & solutions :**
  - *Règles des Hooks et retours anticipés :* Dans `TweetDetailsPage`, le calcul du titre doit précéder l'appel inconditionnel de `useDocumentTitle`, même si le tweet n'est pas trouvé, pour éviter toute violation de l'ordre d'exécution des hooks.

---

## Commandes du projet

### Installation
```bash
bun install
```

### Démarrage en développement
```bash
bun run dev
```

### Vérification de la qualité du code (Linter)
```bash
bun run lint
```

### Contrôle des types TypeScript
```bash
bun tsc --noEmit
```

### Build de production
```bash
bun run build
```

---

## Déclaration d'assistance (Cadre TD Fondations)

Conformément aux consignes du cadrage pédagogique du TD Fondations :
* Des outils d'assistance IA ont été utilisés pour la compréhension des concepts, l'analyse d'erreurs statiques et la validation de la conformité aux spécifications du sujet.
* L'ensemble du code produit, des choix d'architecture (modèles, typage, routage, contexte, immutabilité) et des rendus visuels a été vérifié et audité manuellement pour en assurer la parfaite maîtrise.

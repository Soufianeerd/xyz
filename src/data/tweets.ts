import type { Tweet } from "../types/Tweet";

export const initialTweets: Array<Tweet> = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content: "La machine analytique n'a aucune prétention de créer quoi que ce soit par elle-même. Elle peut accomplir tout ce que nous savons lui ordonner d'exécuter. Elle peut suivre une analyse, mais elle n'a pas la faculté d'anticiper des vérités analytiques ou des relations.",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait peint d'Ada Lovelace"
    },
    createdAt: "2026-07-01T09:12:00.000Z"
  },
  {
    id: "c9bf9e57-1685-4c89-bafb-ff5af830be8a",
    authorName: "Grace Hopper",
    authorHandle: "grace_hopper",
    content: "La phrase la plus dangereuse de la langue est : « On a toujours fait comme ça ». Osez innover, poser des questions et tester de nouvelles approches même si cela bouscule les habitudes !",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
      alt: "Portrait officiel de Grace Hopper en uniforme"
    },
    createdAt: "2026-07-01T10:30:00.000Z"
  },
  {
    id: "d8e3b7b2-4d29-4e78-9e5c-7f5b1a8d4e21",
    authorName: "Alan Turing",
    authorHandle: "alan_turing",
    content: "Nous ne pouvons voir qu'à une courte distance devant nous, mais nous pouvons y voir bien des choses qui doivent être faites.",
    createdAt: "2026-07-01T11:15:00.000Z"
  },
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    authorName: "Margaret Hamilton",
    authorHandle: "margaret_apollo",
    content: "L'ingénierie logicielle ne se limite pas à écrire des lignes de code. Il s'agit de concevoir des systèmes fiables, capables d'anticiper les défaillances et de protéger les missions critiques au bon moment.",
    createdAt: "2026-07-01T12:00:00.000Z"
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    authorName: "Claude Shannon",
    authorHandle: "shannon_info",
    content: "L'information est la résolution de l'incertitude.",
    createdAt: "2026-07-01T13:45:00.000Z"
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    authorName: "Tim Berners-Lee",
    authorHandle: "timberners_lee",
    content: "Le Web ne relie pas simplement des machines, il connecte des personnes. Gardons-le ouvert, universellement accessible et respectueux de la vie privée de tous ses utilisateurs à travers le monde.",
    createdAt: "2026-07-01T14:20:00.000Z"
  },
  {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    authorName: "Barbara Liskov",
    authorHandle: "barbara_liskov",
    content: "La modularité repose sur des abstractions solides : une sous-classe doit pouvoir être substituée à son type de base sans altérer la cohérence du système global.",
    createdAt: "2026-07-01T15:10:00.000Z"
  },
  {
    id: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
    authorName: "Donald Knuth",
    authorHandle: "don_knuth",
    content: "L'optimisation prématurée est la racine de tous les maux en programmation. Concentrez-vous d'abord sur la clarté et la justesse de l'algorithme.",
    createdAt: "2026-07-01T16:05:00.000Z"
  },
  {
    id: "6ba7b813-9dad-11d1-80b4-00c04fd430c8",
    authorName: "Katherine Johnson",
    authorHandle: "katherine_j",
    content: "Les mathématiques sont le langage universel de la précision. Quand on aime résoudre des problèmes complexes, chaque calcul devient une opportunité d'ouvrir une voie vers l'inconnu.",
    createdAt: "2026-07-01T17:30:00.000Z"
  },
  {
    id: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
    authorName: "Linus Torvalds",
    authorHandle: "torvalds",
    content: "Parler ne coûte rien. Montrez-moi le code !",
    createdAt: "2026-07-01T18:00:00.000Z"
  },
  {
    id: "e4d7a120-8c29-4b61-9c3f-4e5a6b7c8d9e",
    authorName: "Alan Turing",
    authorHandle: "alan_turing",
    content: "C'est une observation fascinante sur la machine analytique, Ada. L'idée qu'elle puisse manipuler des symboles au-delà des nombres préfigure déjà le calcul universel.",
    createdAt: "2026-07-01T18:30:00.000Z",
    parentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  {
    id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e",
    authorName: "Margaret Hamilton",
    authorHandle: "margaret_apollo",
    content: "Absolument d'accord Grace ! Remettre en question le statu quo est précisément ce qui a permis de créer le logiciel de navigation d'Apollo sans défaillance.",
    createdAt: "2026-07-01T19:00:00.000Z",
    parentId: "c9bf9e57-1685-4c89-bafb-ff5af830be8a"
  }
];

import mcmontage from "@/assets/projects/mcmontage.png";
import pronotdf from "@/assets/projects/pronotdf.png";
import ccass from "@/assets/projects/ccass.png";
import kili from "@/assets/projects/kili.png";
import fti from "@/assets/projects/fti.png";
import { type Achievement } from "@/types/types";

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "MC Montage",
    description: "Site vitrine pour une entreprise de rayonnage industriel",
    techInfos:
      "Réalisé avec le framework NextJS, réalisation du design, formulaire de contact, hébergement gratuit sur Netlify.",
    url: "https://mcmontage.fr",
    picture: {
      src: mcmontage,
      alt: "Capture d'écran du site https://mcmontage.fr",
      title: "Image du site https://mcmontage.fr",
    },
  },
  {
    id: 2,
    title: "Prono TDF",
    description:
      "Site permettant de pronostiquer sur les étapes du Tour de France",
    techInfos:
      "Réalisé avec ReactJS, base de données Firebase, authentification avec firebase, gestion des rôles utilisateurs, graphique pour affichage des données",
    url: "https://pronotdf.netlify.app/",
    picture: {
      src: pronotdf,
      alt: "Capture d'écran du site https://pronotdf.netlify.app/",
      title: "Image du site https://pronotdf.netlify.app/",
    },
  },
  {
    id: 3,
    title: "Cours de cassation",
    description: "Site de la cour de cassation",
    techInfos: "Réalisé avec le CMS Drupal, intégration en SCSS.",
    url: "https://www.courdecassation.fr/",
    picture: {
      src: ccass,
      alt: "Capture d'écran du site https://www.courdecassation.fr/",
      title: "Image du site https://www.courdecassation.fr/",
    },
  },
  {
    id: 4,
    title: "Kili Technology",
    description:
      "Site de Kili Technology, entreprise d'intelligence artificielle",
    techInfos:
      "Réalisé avec le framework NextJS, gestion du contenu avec le headless CMS Storyblok, hébergé sur Netlify.",
    url: "https://kili-technology.com/",
    picture: {
      src: kili,
      alt: "Capture d'écran du site https://kili-technology.com/",
      title: "Image du site https://kili-technology.com/",
    },
  },
  {
    id: 5,
    title: "FTI",
    description:
      "Site vitrine pour la Fédération luxembourgeoise des Travailleurs Intellectuels Indépendants",
    techInfos: "Réalisé avec CMS Drupal, réalisation du design avec Figma.",
    url: "https://www.fti.lu/",
    picture: {
      src: fti,
      alt: "Capture d'écran du site https://www.fti.lu/",
      title: "Image du site https://www.fti.lu/",
    },
  },
];

export default achievementsData;

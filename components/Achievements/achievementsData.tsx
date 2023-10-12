import ordi from "@/assets/projects/ordinateur.png";
import mcmontage from "@/assets/projects/mcmontage.png";
import pronotdf from "@/assets/projects/pronotdf.png";
import ccass from "@/assets/projects/ccass.png";
import kili from "@/assets/projects/kili.png";
import fti from "@/assets/projects/fti.png";

const achievementsData = [
  {
    id: 1,
    title: "MC Montage",
    description: "Site vitrine pour une entreprise de rayonnage industriel",
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
    url: "https://www.fti.lu/",
    picture: {
      src: fti,
      alt: "Capture d'écran du site https://www.fti.lu/",
      title: "Image du site https://www.fti.lu/",
    },
  },
];

export default achievementsData;

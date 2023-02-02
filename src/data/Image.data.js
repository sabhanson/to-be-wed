import {
  fishCreekFalls,
  SF,
  nagsHead,
  winterPark,
  cannonBeach,
  flatTops,
  myrtleBeach,
  cirque,
  fence,
  NNPP,
} from "../images/index.js";

const carouselData = [
  {
    id: 1,
    src: fishCreekFalls,
    alt:
      "Sabrina, Jayben, and their two dogs standing in front of a Fish Creek falls waterfall in Steamboat Springs, CO.",
  },
  {
    id: 2,
    src: nagsHead,
    alt:
      "Sabrina, Jayben, and their two dogs standing on the beach in front of the sunrise in Nags Head, NC.",
  },
  {
    id: 3,
    src: flatTops,
    alt:
      "Sabrina and Jayben smiling with the Colorado Flat Tops in the background. Steamboat Springs, CO.",
  },
  {
    id: 4,
    src: winterPark,
    alt:
      "Sabrina and Jayben standing in their skis at Winter Park resort in Colorado.",
  },
  {
    id: 5,
    src: cannonBeach,
    alt:
      "Sabrina and Jayben standing in front of Haystack Rock in Cannon Beach, OR.",
  },
  {
    id: 6,
    src: SF,
    alt:
      "Sabrina's hand with engagement ring on with Jayben standing in front of the Golden Gate bridge in San Francisco, CA.",
  },
  {
    id: 7,
    src: cirque,
    alt:
      "Sabrina and Jayben smiling and standing in front a backdrop at Cirque du Soleil in Portland, OR.",
  },
  {
    id: 8,
    src: myrtleBeach,
    alt:
      "Sabrina and Jayben smiling and standing in front of a dolphin statue in Myrtle Beach, SC.",
  },
];

const ourStory = {
  src: fence,
  alt: "Mount Werner behind a fence during sunset, the mountains are pink",
};

const travel = {
  src: NNPP,
  alt: "roses",
};

export { carouselData, ourStory, travel };

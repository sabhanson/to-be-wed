import React from "react";

import {
  BiBookHeart,
  BiHome,
  BiHelpCircle,
  BiHotel,
  BiPaperPlane,
  BiGift,
  BiMap,
} from "react-icons/bi";

import { IoAirplaneOutline } from "react-icons/io5";

const navigationData = [
  {
    id: 1,
    icon: <BiHome />,
    href: "#home",
    class: "dark-green",
    page: "Home",
  },
  {
    id: 2,
    icon: <BiBookHeart />,
    href: "#ourStory",
    class: "orange",
    page: "OurStory",
  },
  {
    id: 3,
    icon: <BiPaperPlane />,
    href: "#rsvp",
    class: "blue",
    page: "RSVP",
  },
  {
    id: 4,
    icon: <IoAirplaneOutline />,
    href: "#travel",
    class: "lilac",
    page: "Travel",
  },
  {
    id: 5,
    icon: <BiHotel />,
    href: "#accommodations",
    class: "red",
    page: "Accommodations",
  },
  {
    id: 6,
    icon: <BiMap />,
    href: "#thingsToDo",
    class: "lime",
    page: "ThingsToDo",
  },
  {
    id: 7,
    icon: <BiGift />,
    href: "#registry",
    class: "purple",
    page: "Registry",
  },
  {
    id: 8,
    icon: <BiHelpCircle />,
    href: "#qa",
    class: "yellow",
    page: "QA",
  },
];

export default navigationData;

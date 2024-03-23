import image2 from "../assets/images/project_2.png";
import image3 from "../assets/images/project_3.png";
import image4 from "../assets/images/press_2.png";
import { FaCheckSquare } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const data = [
  {
    image: image2,
    title: "Funding",
    subTitle: "Bwallet: Software wallet for Bitcoin",
    curated: true,
    treasuryFunded: true,
    content:
      "Bringing you an easy to use Bitcoin wallet with Ordinals, Stamps and BRC-20 integrations",
    subContent: "Bitcoin Metaverse",
    time: "24 days left",
    barRate: "23000",
    barTitle: "STC raised",
    barPercent: "23%",
  },
  {
    image: image4,
    title: "Funding",
    checked: "Curated",
    checked2: "Treasury Funded",
    subTitle: "HoogaBTC: An experiential game built on-chain",
    curated: true,
    treasuryFunded: false,
    content:
      "Bringing you a world of adventure and mystery. Dive into an experience unlike any and for the first time ITS ON CHAIN",
    subContent: "Bitcoin Metaverse",
    time: "24 days left",
    barRate: "23000",
    barTitle: "STC raised",
    barPercent: "23%",
  },
  {
    image: image3,
    title: "Funding",
    checked: "Curated",
    subTitle: "The Ordinal Punks: An Ordinal collection on Bitcoin",
    curated: false,
    treasuryFunded: true,
    content:
      "A collection of 10,000 punks living on Bitcoin with different traits",
    subContent: "Bitcoin Metaverse",
    time: "24 days left",
    barRate: "23000",
    barTitle: "STC raised",
    barPercent: "23%",
  },
];

import ProjectImg1 from "./assets/images/project.png";
import Mining from "./assets/images/mining.png";
import Layer from "./assets/images/layer.png";
import Original from "./assets/images/original.png";
import BRC20 from "./assets/images/brc-20.png";
import Wallet from "./assets/images/wallet.png";
import Defi from "./assets/images/defi.png";
import Corner1 from "./assets/images/corner_1.png";
import Corner2 from "./assets/images/corner_2.png";
import Corner3 from "./assets/images/corner_3.png";
import Corner4 from "./assets/images/corner_4.png";

import Project1 from "./assets/images/project_1.png";
import Project2 from "./assets/images/project_2.png";
import Project3 from "./assets/images/project_3.png";
import Project4 from "./assets/images/project_4.png";

import Founder1 from "./assets/images/founder_1.png";
import Founder2 from "./assets/images/founder_2.png";
import Founder3 from "./assets/images/founder_3.png";

import Press2 from "./assets/images/press_2.png";

import Blog1 from "./assets/images/blog_1.png";
import Blog3 from "./assets/images/blog_2.png";

import Resource1 from "./assets/images/resource_1.png";
import Resource2 from "./assets/images/resource_2.png";
import Resource3 from "./assets/images/resource_3.png";
import Resource4 from "./assets/images/resource_4.png";

import car from "./assets/images/car.png";
import man from "./assets/images/man.png";
import bike from "./assets/images/bike.jpeg";

export const sliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      },
    },
  ],
};

export const ProjectsData = [
  {
    image: Project1,
    title: "The world in shambles",
    content:
      "A Student Capstone Initiative Promoting Environmental Sustainability on our Public Lands.",
    type: "Bitcoin Metaverse",
    amout:
      "<b>23000</b> <span style='opacity: 0.6; font-size: 10.44px'> STX raised </span>",
    percent: 67,
    leftDays: "24",
  },

  {
    image: Project2,
    title: "Bwallet: Software wallet for Bitcoin",
    content:
      "1 in 100 babies are born with a congenital heart condition. We want to show their stories.",
    type: "wallets",
    amout:
      "<b>1.22</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 25,
    leftDays: "60",
  },

  {
    image: Project3,
    title: "Project eduBTC",
    content:
      "A documentary about the life and death of a Brooklyn dive bar. Help me complete post-production!.",
    type: "bitcoin education",
    amout:
      "<b>2.66</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 96,
    leftDays: "27",
  },

  {
    image: Project4,
    title: "MinePRO: A self mining suite for Bitcoin miners",
    content:
      "CYBERFROG: HEARTSICK DELUXE Edition! Let's RACE with CYBERFROG! MINI-CARS!.",
    type: "mining",
    amout:
      "<b>12.9</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 213,
    leftDays: "2",
  },
];
export const ProjectsFundData = [
  {
    image: Project1,
    title: "The world in shambles",
    content:
      "A Student Capstone Initiative Promoting Environmental Sustainability on our Public Lands.",
    type: "Bitcoin Metaverse",
    amout:
      "<b>23000</b> <span style='opacity: 0.6; font-size: 10.44px'> STX raised </span>",
    percent: 67,
    leftDays: "24",
  },

  {
    image: Project2,
    title: "Bwallet: Software wallet for Bitcoin",
    content:
      "1 in 100 babies are born with a congenital heart condition. We want to show their stories.",
    type: "wallets",
    amout:
      "<b>1.22</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 25,
    leftDays: "60",
  },

  {
    image: Project3,
    title: "Project eduBTC",
    content:
      "A documentary about the life and death of a Brooklyn dive bar. Help me complete post-production!.",
    type: "bitcoin education",
    amout:
      "<b>2.66</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 96,
    leftDays: "27",
  },
];

export const PressData = [
  {
    image: Project2,
    title: "Bwallet: Software wallet for Bitcoin",
    content:
      "Bringing you an easy to use Bitcoin wallet with Ordinals, Stamps and BRC-20 integrations.",
    type: "mining",
    amout:
      "<b>1.22</b> <span style='opacity: 0.6; font-size: 10.44px'> BTC raised </span>",
    percent: 25,
    leftDays: "60",
  },
  {
    image: Press2,
    title: "HoogaBTC: An experiential game built on-chain",
    content:
      "Bringing you a world of adventure and mystery. Dive into an experience unlike any and for the first time ITS ON CHAIN",
    type: "bitcoin games",
    explain: "Snapdragon®G3x Gen2丨1GHz GPU丨Ultra Thin丨 6' 2K IPS Screen",
  },
  {
    image: Press2,
    title: "The Ordinal Punks: An Ordinal collection on Bitcoin",
    content:
      "A collection of 10,000 punks living on Bitcoin with different traits.",
    type: "bitcoin games",
    explain: "Snapdragon®G3x Gen2丨1GHz GPU丨Ultra Thin丨 6' 2K IPS Screen",
  },
];

export const FounderData = [
  {
    image: Founder1,
    title: "Why is InventOnBTC important for the Bitcoin ecosystem?",
    content:
      "A Student Capstone Initiative Promoting Environmental Sustainability on our Public Lands.",
  },
  {
    image: Founder2,
    title: "Behind Liquidium’s success.",
    content:
      "A Student Capstone Initiative Promoting Environmental Sustainability on our Public Lands.",
  },
  {
    image: Founder3,
    title: "Bison Labs bringing ZK rollups on BTC",
    content:
      "A Student Capstone Initiative Promoting Environmental Sustainability on our Public Lands.",
  },
];

export const CategoryData = [
  { image: Mining, title: "mining" },
  { image: Layer, title: "layer 2" },
  { image: Original, title: "originals" },
  { image: BRC20, title: "brc-20" },
  { image: Wallet, title: "wallets" },
  { image: Defi, title: "defi" },
];

export const CornerData = [
  {
    image: Corner1,
    title: "Kickstarter Creator Resources",
    content:
      "Our definitive roundup of everything from planning shipping to communicatiing with backers",
  },
  {
    image: Corner2,
    title: "How to tell the story of your creative work",
    content:
      "Tips for uncovering the best story you can tell to press, funders, followers, and everybody else",
  },
  {
    image: Corner3,
    title: "How to tell the story of your creative work",
    content:
      "Our advice for crafting a project page that's honest, open, and transparent in both text and visuals",
  },
  {
    image: Corner4,
    title: "How to tell the story of your creative work",
    content:
      "A list of services that can help you with prototyping, manufacturing, packaging, shipping and more  ",
  },
];

export const BackerData = [
  {
    image: man,
    title: "1 Ordinal drop",
    subTitle: "0.0035 BTC Contribution",
    content: "Public sale 0.003",
  },
  {
    image: car,
    title: "2 Ordinals",
    subTitle: "0.0035 BTC Contribution",
    content: "Public sale 0.003",
  },
  {
    image: bike,
    title: "2 Ordinal +",
    subTitle: "0.0035 BTC Contribution",
    content: "Public sale 0.003",
  },
];

export const FeedbackData = [
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
  {
    title: "John Smith",
    content:
      "I couldn't be happier with the results I achieved through this crowdfunding platform. It provided me with the necessary funds to turn my startup idea into a reality. The support and guidance I received from the platform's team were exceptional. Highly recommended!",
  },
];
export const BlogData = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*o46xeLnEbK4n564P",
    title: "Bitcoin DeFi: Blooming Beyond Expectation",
    content:
      "While Bitcoin remains synonymous with digital gold, a silent revolution is brewing within its ecosystem: Decentralized Finance (DeFi). Once viewed as an Ethereum domain, DeFi is finding fertile ground on the Bitcoin network, attracting users and startups with its unique offerings.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*NlGclvcpCeXq44Mp",
    title: "Beyond the Base Layer: The Thriving Bitcoin Layer 2 Ecosystem",
    content:
      "Bitcoin, the revolutionary cryptocurrency, is no longer just a digital gold. While its core function as a store of value remains crucial, the layer 2 (L2) ecosystem is flourishing, expanding Bitcoin’s capabilities beyond basic transactions and paving the way for a vibrant financial future.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*fkfx-KElhYQlzaHe.jpg",
    title:
      "Battle of the Fungibles: BRC20 vs. Runes — Who Rules the Bitcoin Token Game?",
    content:
      "Bitcoin, the OG cryptocurrency, is no stranger to evolution. While its core function as a digital store of value remains vital, the emergence of fungible tokens has opened a new chapter.",
  },
];

export const ResourceData = [
  {
    image: Resource1,
    title: "Read about Ordinals and BRC20 tools....",
    content: "Now you can give the gift of crowdfunding.",
  },
  {
    image: Resource2,
    title: "How to Inscribe...",
    content: "Putting the new AYANEO Pocket Air to the test!",
  },
  {
    image: Resource3,
    title: "Navigating the new protocols on Bitcoin",
    content: "Does the AYANEO KUN live up to the hype?",
  },
  {
    image: Resource4,
    title: "The UTXO problem",
    content: "Does the AYANEO KUN live up to the hype?",
  },
];

/* eslint-disable no-unused-vars */
import * as React from "react";
import TrendingProjects from "./TrendingProjects";
import CuratedProjects from "./CuratedProjects";
import Spotlight from "./Spotlight";
import Blog from "./Blog";
import Category from "./Category";
import Feedback from "./Feedback";
import Work from "./Work";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingProjects />
      <CuratedProjects />
      <Work />
      <Category />
      <Spotlight />
      <Blog />
      <Feedback />
    </>
  );
};

export default Home;

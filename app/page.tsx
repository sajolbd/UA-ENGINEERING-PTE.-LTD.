import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import Hero from "components/home/Hero";
import Service from "components/home/Service";
import CompletedProjects from "components/home/CompletedProjects";
import React from "react";
import Services from "components/home/Services";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CallBackSection />
      <AboutSection />
      <Service />
      <CompletedProjects />


    </div>
  );
};

export default page;
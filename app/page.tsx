import AboutSection from "components/home/AboutSection";
import CallBackSection from "components/home/CallBackSection";
import Hero from "components/home/Hero";
import Service from "components/home/Service";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <CallBackSection />
      <AboutSection />
      <Service />
    </div>
  );
};

export default page;
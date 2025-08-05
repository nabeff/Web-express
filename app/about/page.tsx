"use client";
import useScrollTriggerSync from "../hooks/useScrollTriggerSync";
import Nav from "../component/Nav";
import PageWrapper from "../component/PageWrapper";
import AnimatedLine from "../component/AnimatedLine";
import SplitRevealText from "../component/SplitRevealText";

const About = () => {
  useScrollTriggerSync(); // <-- This activates ScrollTrigger sync after route loads

  return (
    <PageWrapper>
      <Nav />
      <main >
        <SplitRevealText
          text="Proud to Launch: The New Henry Smith Foundation Website"
          className="text-6xl p-4 leading-tight w-[70%]"
        />
        <AnimatedLine from="left" className="mt-10" />

    
      </main>
    </PageWrapper>
  );
};

export default About;
  
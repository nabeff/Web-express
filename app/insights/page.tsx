"use client";
import Nav from "../component/Nav";
import PageWrapper from "../component/PageWrapper";
import AnimatedLine from "../component/AnimatedLine";
import SplitRevealText from "../component/SplitRevealText";

const About = () => {
  return (
    <PageWrapper>
      <Nav />
      <main className="min-h-screen py-20 space-y-16">
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

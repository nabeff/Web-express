"use client";

import Nav from "../component/Nav";
import PageWrapper from "../component/PageWrapper";



const About = () => {
  return (
    <PageWrapper>
      <Nav />
      <div className="container flex flex-col gap-5 min-h-screen m-auto">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>


    </PageWrapper>
  );
};

export default About;

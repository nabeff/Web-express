import Nav from "./component/Nav";
import PageWrapper from "./component/PageWrapper";
import AnimatedLine from "./component/AnimatedLine";
import SplitRevealText from "./component/SplitRevealText";
import SplitButton from "./component/SplitButton";
import HoverLinkIcon from "./component/HoverLinkIcon";
import VideoHero from "./component/VideoHero";
import OvertakerMarquee from "./component/OvertakerMarquee";
import WorkGrid from "./component/WorkGrid";
import { workData } from "../lib/gsap/workData"; // adjust path if needed
import WorkScroller from "./component/WorkScroller";

export default function Home() {
  return (
    <PageWrapper>
      <Nav />
      <main>
        {/* Hero / Intro Section */}
        <section className="p-10 m-auto flex flex-col gap-10">
          <div className="flex justify-between items-end">
            <div className="left">
              <h1 className="text-7xl w-[80%] font-bold">
                <span className="third-color font-bold">Creative</span> Design & Development{" "}
                <span className="third-color font-bold">Agency</span>
              </h1>
            </div>
            <div className="flex flex-col gap-8 items-start w-[50%]">
              <p className="text-xl font-medium">
                We partner with global startups and established companies, to deliver memorable
                brand identities and digital experiences.
              </p>
              <div className="flex gap-5">
                <SplitButton
                  text="View our work"
                  imgSrc="/arrow-right-up.svg"
                  href="/contact"
                  color="primary"
                  iconClassName="w-4 h-4"
                />
                <HoverLinkIcon
                  href="/about"
                  label="Meet the Team"
                  imgSrc="/arrow-right-up-black.svg"
                  width={18}
                  height={18}
                  className="body-light"
                />
              </div>
            </div>
          </div>

      
        </section>

        {/* Video Hero */}
        <VideoHero videoSrc="/video/herovideo.mp4" />

        {/* Who we are */}
        <section className="container m-auto flex justify-between">
          <div className="flex gap-10 items-start">
            <div className="flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-black"></div>
              <p className="text-[18px] p-2 leading-tight tracking-tight body-light">Who are we?</p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end gap-5 w-[80%] ml-auto">
            <div className="w-full">
              <SplitRevealText
                text="An independent web design"
                className="text-4xl tracking-tight !text-end "
              />
              <SplitRevealText
                text="An independent web design and branding agency in Morocco set up in 2025 who care, build relationships, have industry experience."
                className="text-4xl tracking-tight !text-end "
              />
            </div>

            <div className="flex gap-6 items-center">
              <SplitButton
                text="Contact Us"
                imgSrc="/compass.svg"
                href="/contact"
                color="secondary"
                iconClassName="w-7 h-7"
              />
              <HoverLinkIcon
                href="/about"
                label="Meet the Team"
                imgSrc="/arrow-right-up-black.svg"
                width={14}
                height={14}
                className="body-light"
              />
            </div>
          </div>
        </section>
 b

        <section>
          <SplitRevealText
            text="An independent web design and branding agency in Morocco set up in 2025 who care, build relationships, have industry experience."
            className="text-xl tracking-tight  "
          />
        </section>

          {/* Who we are */}
        <section className="container m-auto flex  gap-10 justify-between">

        <div className="flex items-center gap-1 w-[40%]">
              <p className="text-6xl font-bold p-2 ">Who are we?</p>
            </div>

     

          <div className="flex flex-col gap-5 w-[60%]">
            <div className="">
            
              <SplitRevealText
                text="An independent web design and branding agency in Morocco set up in 2025 who care, build relationships, have industry experience."
                className="text-xl tracking-tight  "
              />
            </div>



            <div className="flex gap-6 ">
              <SplitButton
                text="Contact Us"
                imgSrc="/compass.svg"
                href="/contact"
                color="secondary"
                iconClassName="w-7 h-7"
              />



              
              <HoverLinkIcon
                href="/about"
                label="Meet the Team"
                imgSrc="/arrow-right-up-black.svg"
                width={14}
                height={14}
                className="body-light"
              />
            </div>
          </div>
        </section>


        {/* Work / Blog Section */}

        <OvertakerMarquee />
        
      </main>
    </PageWrapper>
  );
}

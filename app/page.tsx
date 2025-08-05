import Nav from "./component/Nav";
import PageWrapper from "./component/PageWrapper";
import AnimatedLine from "./component/AnimatedLine";
import SplitRevealText from "./component/SplitRevealText";
import LinkHover from "./component/LinkHover";
import SplitButton from "./component/SplitButton";
import HoverLinkIcon from "./component/HoverLinkIcon";
import VideoHero from "./component/VideoHero";

export default function Home() {
  return (
    <PageWrapper>
        <Nav />
      <main className="container m-auto min-h-screen py-20 space-y-16">


  <VideoHero
        videoSrc="/video/herovideo.mp4"
        title="Inspiring Title"
        description="This is a short description overlaying the video."
      />
    


        <div className="flex justify-between">

          <div className="flex gap-10 items-start">

            <div className="flex items-center gap-1">
            
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
            <p className="text-[18px] p-2 leading-tight tracking-tight body-light">Who are we?
          </p>
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
                <SplitButton text="Contact Us" imgSrc="/compass.svg" href="/contact" color="secondary" iconClassName="w-7 h-7" />
                <HoverLinkIcon href="/about" label="Meet the Team" imgSrc="/arrow-right-up.svg" width={14} height={14} className="body-light"/>

        </div>
        </div>



        </div>

        <AnimatedLine from="left" className="mt-10" />


      </main>
    </PageWrapper>
  );
}

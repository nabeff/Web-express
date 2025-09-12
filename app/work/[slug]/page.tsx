import WorkGrid from "../../component/WorkGrid";
import { workData } from "../../../lib/gsap/workData";

export const metadata = {
  title: "Our Work",
};

export default function WorkIndexPage() {
  return (
    <main>
      {/* Optional: reuse your SplitRevealText/AnimatedLine section above */}
      <section className="container m-auto pt-10 md:pt-16">
        <h1 className="text-5xl md:text-7xl font-normal tracking-tight">Selected Work</h1>
        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-2xl">
          We partner with startups and global brands to craft identity systems and digital products.
        </p>
      </section>

      <WorkGrid items={workData} />
    </main>
  );
}

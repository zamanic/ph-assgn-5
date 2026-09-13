import { use, type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  techPromise: Promise<Technology[]>;
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
  selectedStack: Technology[];
  setSelectedStack: Dispatch<SetStateAction<Technology[]>>;
}

const Technologies = ({
  techPromise,
  selectedIds,
  setSelectedIds,
  selectedStack,
  setSelectedStack,
}: TechnologiesProps) => {
  const technologies = use(techPromise);

  return (
    <section id="technologies" className="py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Explore the{" "}
            <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                  setSelectedStack={setSelectedStack}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <YourStack
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
              setSelectedIds={setSelectedIds}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

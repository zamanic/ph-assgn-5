import type { Technology } from "../../types/technology";
import { FaStar } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

interface TechnologyCardProps {
  tech: Technology;
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
  setSelectedStack: Dispatch<SetStateAction<Technology[]>>;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-sky-100 text-sky-700",
  Versatile: "bg-emerald-100 text-emerald-700",
  Fast: "bg-orange-100 text-orange-700",
  "Full-Stack": "bg-purple-100 text-purple-700",
  Standard: "bg-emerald-100 text-emerald-700",
  "Top SQL": "bg-blue-100 text-blue-700",
  Cache: "bg-rose-100 text-rose-700",
  Ubiquitous: "bg-amber-100 text-amber-700",
  Essential: "bg-sky-100 text-sky-700",
  Robust: "bg-sky-100 text-sky-700",
  Modern: "bg-sky-100 text-sky-700",
  Containers: "bg-sky-100 text-sky-700",
};

const categoryChipColors: Record<string, string> = {
  Frontend: "bg-slate-100 text-slate-600",
  Backend: "bg-slate-100 text-slate-600",
  Database: "bg-slate-100 text-slate-600",
  Language: "bg-slate-100 text-slate-600",
  Styling: "bg-slate-100 text-slate-600",
  DevOps: "bg-slate-100 text-slate-600",
  Tools: "bg-slate-100 text-slate-600",
};

const difficultyColor: Record<string, string> = {
  "Beginner-Friendly": "text-emerald-600",
  Intermediate: "text-amber-600",
  Advanced: "text-rose-600",
};

const TechnologyCard = ({
  tech,
  selectedIds,
  setSelectedIds,
  setSelectedStack,
}: TechnologyCardProps) => {
  const isAdded = selectedIds.includes(tech.id);

  const handleAddToStack = () => {
    if (isAdded) {
      toast.warning(`${tech.name} is already in your stack`, {
        position: "top-center",
        autoClose: 3000,
        transition: Bounce,
      });
      return;
    }

    setSelectedIds((prev) => [...prev, tech.id]);
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack`, {
      position: "top-center",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  return (
    <div
      className={`group relative rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
        isAdded
          ? "tech-card-added shadow-lg"
          : "border border-slate-200/70 shadow-sm hover:border-slate-300"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-7 h-7 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
            }}
          />
        </div>
        {tech.badge && (
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColors[tech.badge] || "bg-slate-100 text-slate-600"}`}
          >
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2 min-h-[2.75rem]">
        {tech.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${categoryChipColors[tech.category] || "bg-slate-100 text-slate-600"}`}
        >
          {tech.category}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${difficultyColor[tech.difficulty] || "text-slate-600"}`}
        >
          {tech.difficulty}
        </span>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1">
          <FaStar className="text-amber-400 text-sm" />
          <span className="text-sm font-semibold text-slate-700">
            {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          isAdded
            ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white opacity-90 cursor-not-allowed shadow-md"
            : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md"
        }`}
      >
        {isAdded ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Added to Stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;

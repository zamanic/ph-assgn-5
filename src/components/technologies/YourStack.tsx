import type { Technology } from "../../types/technology";
import type { Dispatch, SetStateAction } from "react";
import { HiX } from "react-icons/hi";
import { Bounce, toast } from "react-toastify";

interface YourStackProps {
  selectedStack: Technology[];
  setSelectedStack: Dispatch<SetStateAction<Technology[]>>;
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
}

const YourStack = ({
  selectedStack,
  setSelectedStack,
  setSelectedIds,
}: YourStackProps) => {
  const handleRemove = (tech: Technology) => {
    setSelectedStack((prev) => prev.filter((t) => t.id !== tech.id));
    setSelectedIds((prev) => prev.filter((id) => id !== tech.id));
    toast.info(`${tech.name} removed from stack`, {
      position: "top-center",
      autoClose: 2500,
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    setSelectedIds([]);
    toast.success("Stack Cleared", {
      position: "top-center",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm self-start">
      <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
        Selected Stack
      </h3>
      {selectedStack.length === 0 ? (
        <p className="text-base text-slate-400 mb-6">Nothing stacked yet!</p>
      ) : (
        <p className="text-base text-slate-400 mb-6">
          <span className="font-semibold brand-gradient-text">
            {selectedStack.length}
          </span>{" "}
          Technology{selectedStack.length !== 1 ? "ies" : "y"} Selected
        </p>
      )}

      {selectedStack.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl py-16 px-4 flex items-center justify-center mb-6">
          <p className="text-lg text-slate-400 font-medium">
            You haven't stacked any technology yet.
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="stack-item flex items-center justify-between gap-3 rounded-2xl p-4 bg-white"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility =
                        "hidden";
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-slate-900 truncate">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-slate-400 truncate">
                    {tech.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(tech)}
                className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-all flex-shrink-0"
                aria-label={`Remove ${tech.name}`}
              >
                <HiX size={22} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleRemoveAll}
        disabled={selectedStack.length === 0}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
          selectedStack.length === 0
            ? "border-slate-100 text-slate-300 cursor-not-allowed"
            : "border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400"
        }`}
      >
        Remove All
      </button>
    </aside>
  );
};

export default YourStack;

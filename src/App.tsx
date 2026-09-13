import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";

const techFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const LoadingFallback = () => (
    <section id="technologies" className="py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 animate-pulse">
          <div className="h-10 w-72 bg-slate-200 rounded-lg mb-3" />
          <div className="h-5 w-96 max-w-full bg-slate-200 rounded-md" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 p-5 h-80 animate-pulse">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-200" />
                    <div className="w-16 h-5 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-6 w-28 bg-slate-200 rounded mb-2" />
                  <div className="h-10 w-full bg-slate-200 rounded mb-4" />
                  <div className="flex gap-2 mb-4">
                    <div className="w-20 h-6 rounded bg-slate-200" />
                    <div className="w-28 h-6 rounded bg-slate-200" />
                  </div>
                  <div className="mb-5 w-16 h-5 rounded bg-slate-200" />
                  <div className="w-full h-10 rounded-lg bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 animate-pulse h-96">
              <div className="h-8 w-36 bg-slate-200 rounded mb-2" />
              <div className="h-5 w-48 bg-slate-200 rounded mb-6" />
              <div className="border-2 border-dashed border-slate-200 rounded-2xl py-16 px-4 mb-6">
                <div className="h-6 w-40 mx-auto bg-slate-200 rounded" />
              </div>
              <div className="w-full h-11 rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Banner />
        <Suspense fallback={<LoadingFallback />}>
          <Technologies
            techPromise={techPromise}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

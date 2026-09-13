import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
  const scrollToTech = () => {
    const el = document.getElementById("technologies");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
              Build Your Ideal<br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed mb-8">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToTech}
                className="brand-gradient text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                Explore Technologies
              </button>
              <button className="border-2 border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:border-pink-300 hover:text-pink-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={BannerStack}
              alt="Dev Stack Banner"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

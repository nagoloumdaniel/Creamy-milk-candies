import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full pb-16 px-4">
      {/* Section Header */}
      <div className="px-11 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 pt-20 sm:pt-40">
        <div className="col-span-12 rounded-lg">
          <h2 className="text-5xl font-bold text-center">A Propos de Nous</h2>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex items-center justify-center min-h-[screen] pt-20">
        <div className="relative flex flex-col lg:flex-row w-full max-w-[72rem] rounded-xl bg-white/50 text-gray-700 shadow-2xl">
          {/* Image Section */}
          <div className="relative w-full lg:w-2/5 shrink-0 overflow-hidden rounded-t-xl lg:rounded-2xl lg:rounded-r-none">
            <img
              src="/Gallery/about.jpg"
              alt="image"
              className="h-full w-full object-cover rounded-t-xl lg:rounded-2xl"
            />
          </div>
          
          {/* Text Section */}
          <div className="p-8 flex flex-col min-h-[600px] justify-center gap-6">
            <h6 className="font-sans text-lg font-bold leading-relaxed tracking-wide text-gray-900">
              Creamy Milk Candies Ltd
            </h6>
            <h4 className="font-sans text-3xl font-extrabold leading-snug tracking-wide text-red-500">
              Votre nouveau paquet de bonbons, à quelques clics seulement            
              </h4>
            <p className="font-sans text-lg font-medium leading-relaxed text-gray-900">
              Chez Creamy Milk Candies, on est passionnés par les bonbons ! <br></br>
              Notre but : vous faire découvrir des douceurs originales, savoureuses et de qualité. Ce produit est choisi avec soin pour offrir une expérience gourmande et pleine de bonne humeur.
              <br />Faites-vous plaisir, c’est sucré, c’est joyeux, c’est nous ! 🍭

            </p>
            <a className="inline-block" href="/Order_Now">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-4 px-8 text-center font-sans text-sm font-bold uppercase text-red-400 transition-all hover:bg-red-400/10 active:bg-red-400/30 disabled:pointer-events-none disabled:opacity-50"
                type="button"
              >
                Commander
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

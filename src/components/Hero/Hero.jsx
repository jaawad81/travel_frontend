import React, { useState } from "react";
import Animation from "../Animation/Animation";
import { useScroll } from "framer-motion";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(300);
  return (
    <section className="absolute top-0  bg-black/20 h-full text-white w-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <Animation initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container grid grid-cols-1 gap-4">
            {/* text content section */}
            <p data-aos="fade-up" className="text-xl font-semibold">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                font-bold text-3xl"
            >
              Search Your Distination Here
            </p>

            {/*  form section*/}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className=" relative space-y-4 bg-white rounded-md p-4  text-black"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-3">
                <div>
                  <label htmlFor="destination" className="opacity-70">
                    Search Your Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Dubai"
                    className="w-full bg-gray-100 my-2  px-4 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="opacity-70">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full  px-4 !text-slate-400  bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline rounded-full p-2"
                  />
                </div>
                <div>
                  <label htmlFor="range" className="opacity-70 block">
                    <div className="w-full flex justify-between items-center">
                      <p>Max Price</p>
                      <p className="font-bold text-xl">
                        ${priceValue || "Value"}
                      </p>
                    </div>
                  </label>
                  <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                    <input
                      type="range"
                      name="range"
                      id="range"
                      className="appearance-none  mx-4 w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2 outline-none  accent-white"
                      min={150}
                      max={1000}
                      value={priceValue}
                      onChange={(e) => setPriceValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* button */}
              <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                Search Now
              </button>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default Hero;


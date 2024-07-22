import React from "react";
import { TestimonialData, settings } from "../../constants/testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

  return (
    <section className="py-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
            Testimonial
          </p>
          <h1 className="text-2xl font-bold">Testimonial</h1>
          <p className="text-xs tet-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium fugiat repellendus, fugit aut illo ut esse similique
            dicta facilis est.
          </p>
        </div>
        {/* testimonial section */}
        <div className="w-3/4 m-auto">
          <div className="mt-10">
            <Slider {...settings}>
            {TestimonialData.map((data, index) => (
              <div className="my-6" key={index}>
                <div className="flex flex-col justify-center items-center gap-4 mx-4 p-4 text-center shadow-lg p-4 rounded-xl bg-primary/10 relative">
                  <img src={data.image} alt="Not loaded"  className="rounded-full block mx-auto"/>
                  <h1 className="text-xl font-bold ">{data.name}</h1>
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>

                </div>
              </div>
            ))}
               </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


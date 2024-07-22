import React from "react";
import IMG from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel, MdFastfood } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import Animation from "../Animation/Animation";
const Banner_1 = () => {
  return (
      <section
        className="min-h-[550px]  bg-gray-100 
     "
      >
        <div className="min-h-screen flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div>
                <img
                  src={IMG}
                  alt="Not Loades"
                  className="max-w-[450px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold sm:text-4xl ">
                  Explore All corners of the world with us
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-6 text-center ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis vel voluptates dolorem aspernatur, sint delectus quod
                  culpa debitis. Commodi, ducimus?
                </p>
                <div className="grid grid-cols-2 gap-6 items-center px-4">
                  <div className="space-y-6 ">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-violet-400" />
                      <p>Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-orange-100 " />
                      <p>Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-green-400" />
                      <p>Wifi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdFastfood className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-yellow-100 " />
                      <p>Fast Food</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner_1;

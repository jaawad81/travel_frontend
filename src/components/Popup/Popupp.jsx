import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Popupp = ({ orderPopUp, setOrderPopUp }) => {
  return (
    orderPopUp && (
      <section className=" h-screen w-screen fixed top-0 left-0 bg-black/50 z-10 backdrop-blur-sm">
        <div  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[330px] text-black shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
             <div>
               <h1>Book Your Trip</h1>
             </div>

             <div>
              <IoIosCloseCircleOutline
              className="text-2xl cursor-pointer"
              onClick={()=>setOrderPopUp(false)}
              />
             </div>
          </div>
          {/* Body */}
          <div className="mt-4">
            <input type="text" placeholder="Name" 
            className="w-full rounded-full border border-gray-300  py-1 px-4 mb-4 outline-none"
            /> 
            <input type="email" placeholder="Email" 
            className="w-full rounded-full border border-gray-300  py-1 px-4 mb-4 outline-none"
            /> 
            <input type="Address" placeholder="Address" 
            className="w-full rounded-full border border-gray-300  py-1 px-4 mb-4 outline-none"
            /> 
            <div className="flex justify-center items-center">
              <button
              className="bg-gradient-to-r from-primary to-secondary hover-scale-105 duration-200 text-white py-1 px-4 rounded-full"
              >
                Book Now
              </button>
            </div>

          </div>
        </div>
      </section>
    )
  );
};

export default Popupp;

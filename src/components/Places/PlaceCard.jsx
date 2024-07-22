import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const PlaceCard = ({ place,handleOrderPopUp }) => {
  return (
    <div className="shadow-lg cursor-pointer" onClick={handleOrderPopUp}>
      <div className="overflow-hidden transition-all duration-500 hover:shadow-xl cursor-pointer">
        <img
          src={place.img}
          alt="Not Loaded"
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3 ">
        <h1 className="line-clamp-1 font-bold text-xl">{place.title}</h1>
        <div className="flex items-center gap-2 opacity-70">
         <IoLocationOutline/>
          <span>{place.location}</span>
        </div>
        <p>{place.description}</p>
        <div className=" flex items-center justify-between border-t-2 y-3 !mt-3">
          <div className="opacity-70">
            <p>{place.type}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{place.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;

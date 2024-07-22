import React from "react";
import { PlacesData } from "../../constants/places";
import { PlaceCard } from "../index";
import Animation from "../Animation/Animation";

const Places = ({ handleOrderPopUp }) => {
  return (
    <section className="bg-gray-50 py-10">
      
        <div className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((place, index) => (
              <PlaceCard
                place={place}
                key={index}
                handleOrderPopUp={handleOrderPopUp}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default Places;

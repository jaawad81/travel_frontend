import React from "react";
import { Location } from "../components";
const About = () => {
  return (
    <section className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold">
          About Us
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, culpa
          fuga libero eum ullam sunt molestiae quos tempora esse earum quam est
          vitae fugit error eveniet ipsum obcaecati sit saepe maxime id numquam?
          Dolorum eos optio error at minima maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum qui
          quis excepturi voluptatum eaque voluptate reprehenderit quaerat
          cupiditate doloribus adipisci.
        </p>
      </div>
      <Location />
    </section>
  );
};

export default About;

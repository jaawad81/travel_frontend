import React from "react";
import {
  Banner,
  Hero,
  Places,
  Blogs,
  Banner_1,
  Testimonial,
  Popupp
} from "../components/index";
import main from "../assets/video/main.mp4";
import IMG from "../assets/cover-women.jpg";
import IMG1 from "../assets/travel-cover2.jpg";

const Home = () => {
  const [orderPopUp, setOrderPopUp] = React.useState(false);
  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp); 
    console.log("Oee:"+orderPopUp);
  }
  return (
    <section>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="abosulte right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={main} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places  handleOrderPopUp={handleOrderPopUp}/>
        <Banner IMG={IMG} />
        <Blogs />
        <Banner_1 />
        <Banner IMG={IMG1} />
        <Testimonial />
        <Popupp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
      </div>
    </section>
  );
};

export default Home;

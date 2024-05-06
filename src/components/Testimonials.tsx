import React from "react";
import SimpleSlider from "./Slider";

const Testimonials = () => {
  return (
    <div className="my-20 max-w-screen-2xl m-auto">
      <div>
        <h4 className="px-4 my-4  text-3xl font-gilroyBold">
          What our <br /> <span className="text-primary">Customers</span> says
        </h4>
      </div>
      <SimpleSlider />
    </div>
  );
};

export default Testimonials;

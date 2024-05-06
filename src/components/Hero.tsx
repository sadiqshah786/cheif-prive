import { Images } from "@src/constants/assetsUrls";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" max-w-screen-2xl m-auto">
      <div className="flex justify-between">
        <h1 className="text-5xl font-gilroyBold">
          Book <span className="text-primary">Private Chef</span> <br /> for
          your <br /> Dinner <span className="text-primary">Party</span>
        </h1>
        <Image src={Images.hero} alt="" width={700} height={700} />
      </div>
    </div>
  );
};

export default Hero;

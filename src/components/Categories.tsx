import { Images } from "@src/constants/assetsUrls";
import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

const Categories = () => {
  return (
    <div className="my-6 max-w-screen-2xl m-auto">
      <div className="flex ">
        <Image
          className={styles.img}
          src={Images.line}
          alt=""
          width={10}
          height={10}
        />
        <h4 className={`${styles.line} px-4 my-4 text-3xl font-gilroyBold`}>
          Browse by <span className="text-primary"> Categories</span>
        </h4>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <Image
            className="cursor-pointer"
            src={Images.catMain}
            alt=""
            width={650}
            height={700}
          />
        </div>
        <div className="w-[60%]">
          <div className="mb-4 flex gap-8">
            <div>
              <Image
                src={Images.cat1}
                alt=""
                className="cursor-pointer"
                width={350}
                height={350}
              />
            </div>
            <div>
              <Image
                src={Images.cat2}
                alt=""
                className="cursor-pointer"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <Image
                src={Images.cat3}
                alt=""
                className="cursor-pointer"
                width={350}
                height={350}
              />
            </div>
            <div>
              <Image
                src={Images.cat4}
                alt=""
                className="cursor-pointer"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

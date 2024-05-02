"use client";

import { Images } from "@src/constants/assetsUrls";
import { routes } from "@src/constants/routes";
import { CheckArray } from "@src/constants/utils/checkArray";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import style from "./style.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div
      className={`${style.main_header}px-3 max-w-screen-2xl m-auto py-4 flex items-center justify-between`}
    >
      <Image width={110} height={89} src={Images.logo} alt={Images.logo} />
      <ul className={`${style.desktopNav} flex gap-6`}>
        {CheckArray(routes) &&
          routes.map((item: any) => {
            return (
              <li
                className={`capitalize  mr-8 font-GilroyLight border-b-2 ${
                  item.label === "Home"
                    ? "border-primary text-black font-gilroySemiBold hover:border-yellow-500"
                    : "border-transparent text-lightWhite"
                } transition-colors duration-300 `}
                key={item?.label}
              >
                <Link href={item?.url}>{item?.label}</Link>
              </li>
            );
          })}
      </ul>

      <div className="loginInfo flex items-center gap-2">
        <div className={style.mobileNav}>
          <Image
            onClick={toggleDrawer}
            width={20}
            height={20}
            src={Images.mobileIcon}
            alt={Images.mobileIcon}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
          >
            <div className="text-center flex justify-center p-4">
              <Image
                width={110}
                height={89}
                src={Images.logo}
                alt={Images.logo}
              />
            </div>
            <div className="p-6">
              <ul>
                {CheckArray(routes) &&
                  routes.map((item: any) => {
                    return (
                      <li className="text-secondry my-4" key={item?.label}>
                        <Link href={item?.url}>{item?.label}</Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Drawer>
        </div>
        <ul className={style.desktopNav}>
          <li className="flex gap-3  text-gilroyBold text-textColor text-sm">
            <Link href="" className="text-textColor flex gap-1 items-center">
              <Image
                width={15}
                height={15}
                src={Images.signUpIcon}
                alt={Images.signUpIcon}
              />{" "}
              <span>Sign Up</span>
            </Link>
            <span className="h-[16px] mt-[2px] mx-1 border-[1px] border-gray-300"></span>
            <Link href="" className="text-textColor">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

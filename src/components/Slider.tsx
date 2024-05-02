"use client";   

import React from "react";
import Slider from "react-slick";
import TestimonialsCard from "./common/TestimonialsCard";
import { testimonialsData } from "@src/constants/assetsUrls";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data) => {
        return <TestimonialsCard key={data.title} data={data} />;
      })}
    </Slider>
  );
}

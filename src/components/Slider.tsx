"use client";
import React from "react";
import Slider from "react-slick";
import TestimonialsCard from "./common/TestimonialsCard";
import { testimonialsData } from "@src/constants/assetsUrls";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data) => {
        return <TestimonialsCard key={data.title} data={data} />;
      })}
    </Slider>
  );
}

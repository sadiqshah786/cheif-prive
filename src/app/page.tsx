import Hero from "@components/Hero";
import AddBanner from "@components/AddBanner";
import Dishes from "@components/Dishes";
import Categories from "@components/Categories";
import Testimonials from "@components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <AddBanner />
      <Dishes />
      <Categories />
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;

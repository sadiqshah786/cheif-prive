import Hero from "@components/Hero";
import AddBanner from "@components/AddBanner";
import Dishes from "@components/Dishes";
import Categories from "@components/Categories";
import Testimonials from "@components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <AddBanner />
      <Dishes />
      <Categories />
      <Testimonials />
    </>
  );
};

export default Home;

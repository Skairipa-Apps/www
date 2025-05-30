import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/hero-section";
import MissionSection from "@/components/home/mission-section";
import ProductSection from "@/components/product/product-section";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Skairipa Apps Inc.
        </title>
        <meta
          name="description"
          content="Skairipa Apps Inc. develops innovative, privacy-conscious iOS and web applications that respect your data while delivering exceptional user experiences."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <HeroSection />
      <MissionSection />
      <ProductSection />
    </>
  );
};

export default Home;

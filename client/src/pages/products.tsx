import { Helmet } from "react-helmet";
import ProductSection from "@/components/product/product-section";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Discover our suite of privacy-conscious applications for iOS and the web, designed with your data privacy in mind."
        />
      </Helmet>

      <div className="bg-neutral-light py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Our Products</h1>
        </div>
      </div>

      <ProductSection />
    </>
  );
};

export default Products;

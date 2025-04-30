import { products } from "@/lib/utils";
import ProductCard from "./product-card";

const ProductSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Applications</h2>
          <p className="section-subtitle">
            Discover our suite of privacy-conscious applications for iOS and the web.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

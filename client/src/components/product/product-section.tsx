import { products } from "@/lib/utils";
import ProductCard from "./product-card";

const ProductSection = () => {
  const fullRowCount = 3; // 3 columns
  const fullRows = products.slice(
    0,
    Math.floor(products.length / fullRowCount) * fullRowCount
  );
  const lastRow = products.slice(fullRows.length);

  return (
    <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Applications</h2>
          <p className="section-subtitle">
            Discover our suite of privacy-conscious applications for iOS and the
            web.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Grid for full rows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullRows.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Flex row for leftover products, with fixed width */}
        {lastRow.length > 0 && (
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {lastRow.map((product) => (
              <div key={product.id} className="w-full md:w-[48%] lg:w-[32%]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
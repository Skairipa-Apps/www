import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product, getStatusColor } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const Icon = product.icon;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div
        className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}
      >
        <Icon className="text-white w-16 h-16" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold max-w-60">{product.name}</h3>
          <Badge className={`${getStatusColor(product.status)}`}>
            {product.status}
          </Badge>
        </div>
        <p className="text-[hsl(var(--neutral-mid))] mb-4 flex-grow">
          {product.description
            .split(/(\([^)]+\)\[[^\]]+\])/g)
            .map((part, index) => {
              const match = part.match(/^\(([^)]+)\)\[([^\]]+)\]$/);
              return match ? (
                <a
                  key={index}
                  href={match[2]}
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {match[1]}
                </a>
              ) : (
                <p key={index}>{part}</p>
              );
            })}
        </p>
        <a
          href={product.learnMoreUrl}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

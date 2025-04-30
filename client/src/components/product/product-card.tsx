import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product, getStatusColor } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  Shield,
  Globe,
  Heart,
  FileText,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

const getProductIcon = (iconName: string): LucideIcon => {
  switch (iconName) {
    case "shield-alt":
      return Shield;
    case "globe":
      return Globe;
    case "heart":
      return Heart;
    case "file-alt":
      return FileText;
    case "calendar-check":
      return CalendarCheck;
    case "comments":
      return MessageSquare;
    default:
      return Shield;
  }
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const Icon = getProductIcon(product.icon);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
        <Icon className="text-white w-16 h-16" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <Badge className={getStatusColor(product.status)}>
            {product.status}
          </Badge>
        </div>
        <p className="text-neutral-mid mb-4 flex-grow">
          {product.description}
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

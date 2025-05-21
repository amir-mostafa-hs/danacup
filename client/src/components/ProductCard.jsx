import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ imageUrl, productName, price, tag, discountLabel = "-20%" }) {
  return (
    <Card className="w-64">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden border">
        <img src={imageUrl} alt={productName} className="object-cover w-full h-full" />
        <Badge className="absolute top-2 right-2 bg-red-600 text-white">{discountLabel}</Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-gray-800 font-medium mt-1">{price}</p>
        <span className="text-sm text-muted-foreground mt-1 block">{tag}</span>
      </CardContent>
    </Card>
  );
}

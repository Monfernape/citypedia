import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { City } from "@/server/entities";
import Image from "next/image";
import Link from "next/link";
interface CityInfoProps {
  city: City;
}

const CityPreviewCard: React.FC<CityInfoProps> = ({ city }) => {
  return (
    <Link href={`/${city.state_name}/${city.city}-${city._id}`}>
      <Card>
        <div className="flex overflow-hidden rounded-t-lg">
          <Image
            alt="Product Image"
            className="object-cover border-b w-full h-40 sm:h-64 md:h-80"
            height={300}
            src="/placeholderImage.webp"
            width={600}
          />
        </div>
        <CardHeader className="p-6">
          <CardTitle className="text-2xl">{city.city}</CardTitle>
          <CardDescription>
            A magical mug that enchants your daily sips with wonder and joy
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
export default CityPreviewCard;

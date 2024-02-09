import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
interface CityInfoProps {
    city: {
        name: string;
        imageUrl: string;
        country: string;
        population: number;
        density: number;
        timezone: string;
    };
}

const CityDetailsCard: React.FC<CityInfoProps> = ({ city }) => {
    return (
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
                <CardTitle className="text-2xl">{city.name}</CardTitle>
                <CardDescription>A magical mug that enchants your daily sips with wonder and joy</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <details>
                    <summary className="font-medium mb-4">What's the story behind the WhimsiMug?</summary>
                    <p className="text-sm leading-loose">
                        The WhimsiMug is the brainchild of our team of imaginative designers who are passionate about infusing a
                        sense of magic into everyday objects. Inspired by the enchanting beauty of fairy tales and the limitless
                        creativity of dreams, they set out to create a mug that would not only hold your favorite beverages but
                        also transport you to a world of whimsy with every sip.
                    </p>
                </details>
                <details>
                    <summary className="font-medium mb-4">What makes the WhimsiMug special?</summary>
                    <p className="text-sm leading-loose">
                        The magic of the WhimsiMug lies in its captivating design, which features a delightful array of colorful
                        illustrations that seem to come alive as you pour your hot or cold drinks into the mug. Each stroke of the
                        artist's brush tells a story, and you'll find yourself getting lost in the charming details that adorn the
                        surface of the mug.
                    </p>
                </details>
                <details>
                    <summary className="font-medium mb-4">Can I put the WhimsiMug in the dishwasher or microwave?</summary>
                    <p className="text-sm leading-loose">
                        The WhimsiMug is designed to be as convenient as it is charming, which is why it is both dishwasher and
                        microwave safe. You can easily clean your mug after enjoying your favorite hot or cold beverages, and when
                        you need to reheat your drink, you can pop the WhimsiMug into the microwave without any worries.
                    </p>
                </details>

            </CardContent>
            <CardFooter className="p-6">
                <div>
                    <h2 className="text-lg font-bold">Reviews</h2>
                    <ul className="grid gap-4">
                        <li>
                            <Card className="p-0">
                                <CardContent className="flex items-start p-4">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h3 className="font-medium">Jane Smith</h3>
                                            <div className="flex items-center space-x-1">
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                            </div>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
                                            The widgets from Acme Inc are top-notch! I've been using them for years and they never
                                            disappoint.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card className="p-0">
                                <CardContent className="flex items-start p-4">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h3 className="font-medium">John Doe</h3>
                                            <div className="flex items-center space-x-1">
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-primary" />
                                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                            </div>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
                                            I found the customer service at Acme Inc to be excellent. The staff was friendly and helpful,
                                            and my questions were answered promptly.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                    </ul>
                </div>
            </CardFooter>

        </Card>
    )
}
export default CityDetailsCard;

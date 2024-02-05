"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Reviews() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-sm font-normal flex flex-row gap-4 items-center">
                    <span className="flex flex-row">
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarFilledIcon />
                      <StarFilledIcon />
                    </span>{" "}
                    <span className="text-sm font-normal text-gray-300">
                      . today
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Gorgeous. As always. I love the city and the people. I will
                    be back soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <CardTitle className="text-sm font-semibold">
                        John Doe
                      </CardTitle>
                      <CardDescription className="text-xs text-gray-500">
                        Traveler
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

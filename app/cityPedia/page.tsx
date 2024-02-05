import { Button } from "@/components/ui/button";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
import Link from "next/link";
import Accordions from "./components/Accordions";
import Videos from "./components/Videos";
import Articals from "./components/Articals";

export default function LoginPage() {
  return (
    <div className="bg-white p-5 font-Inter">
      <h1 className="text-black text-base font-bold pb-2.5">
        Personal Injury attorney near me in Los Angeles, California
      </h1>
      <p className="text-xs font-bold text-[#00000082] pb-2.5">
        Top Rated Personal Injury Lawyers in Los Angeles
      </p>
      <Profile />
      <Profile />
      <Profile />
      <Button variant="link" className="px-0 text-gray-300">
        more
      </Button>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold py-4">4.93</h1>
        <h2 className="text-base font-medium">Guest Favourite</h2>
        <p className="text-center text-gray-500 text-base px-12">
          One of the most homes on loved Airbnb based on ratings, reviews and
          reliablity.
        </p>
      </div>
      <Reviews />
      <Button variant="outline" className="w-full">
        Show all 280 reviews
      </Button>
      <h1 className="text-lg font-normal my-2.5">FREQUENTLY ASKED QUESTIONS</h1>
      <p className=" text-gray-500 text-xs">
        Still having questions? Vist over <Link href={"#faq"}>FAQ page</Link> or{" "}
        <Link href={"#contact"}>Contact us</Link>
      </p>
      <Accordions />
      <Button variant="link" className="px-0 text-gray-300">
        more
      </Button>
      <p className="text-base font-normal text-[#000000] pb-2.5">
        PERSONAL INJURY VIDEOS FOR LOS ANGELES
      </p>
      <Videos />
      <p className="text-xs font-normal text-black my-3">ARTICLES</p>
      <Articals />
      <Button variant="link" className="px-0 text-gray-300">
        more
      </Button>
      <p className="text-xs font-normal">
        ZIP CODES FOR PERSONAL INJURY LAW FIRMS
      </p>
      <p className="text-xs font-normal">90036 90210 90046 90069 90210 90212</p>
    </div>
  );
}

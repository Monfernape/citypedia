import Link from "next/link";
import { Button } from "@/components/ui/button";
import CityAttorneyProfile from "./components/CityAttorneyProfile";
import CityReviews from "./components/CityReviews";
import CityFAQs from "./components/CityFAQs";
import CityVideos from "./components/CityVideos";
import CityArticles from "./components/CityArticles";
import { RICH_TEXT_JSON } from "./rich-text-scripts";

type Props = {
  params: { state: string; city: string };
};

export default function CityDetails({ params }: Props) {
  const state = decodeURI(params.state);
  const city = decodeURI(params.city);

  // Fetch data based on state and city
  return (
    <div className="flex items-center flex-col w-full p-3">
      <h1 className="text-black text-base font-bold pb-2.5">
        Personal Injury attorney near me in Los Angeles, California
      </h1>
      <p className="text-xs font-bold text-[#00000082] pb-2.5">
        Top Rated Personal Injury Lawyers in Los Angeles
      </p>
      <CityAttorneyProfile />
      <CityAttorneyProfile />
      <CityAttorneyProfile />
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

      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RICH_TEXT_JSON.REVIEW),
          }}
        />
        <CityReviews />
      </section>

      <Button variant="outline" className="w-full">
        Show all 280 reviews
      </Button>
      <h1 className="text-lg font-normal my-2.5">FREQUENTLY ASKED QUESTIONS</h1>
      <p className=" text-gray-500 text-xs">
        Still having questions? Vist over <Link href={"#faq"}>FAQ page</Link> or{" "}
        <Link href={"#contact"}>Contact us</Link>
      </p>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RICH_TEXT_JSON.FAQ),
          }}
        />
        <CityFAQs />
      </section>
      <Button variant="link" className="px-0 text-gray-300">
        more
      </Button>
      <p className="text-base font-normal text-[#000000] pb-2.5">
        PERSONAL INJURY VIDEOS FOR LOS ANGELES
      </p>
      <CityVideos />

      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RICH_TEXT_JSON.ARTICLE),
          }}
        />
        <p className="text-xs font-normal text-black my-3">ARTICLES</p>
        <CityArticles />
      </section>

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

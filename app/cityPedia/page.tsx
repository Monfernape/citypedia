import { Button } from "@/components/ui/button";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
import Link from "next/link";
import Accordions from "./components/Accordions";
import Videos from "./components/Videos";
import Articals from "./components/Articals";

export default function LoginPage() {
  const jsonLdArtical = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Now Launch Newton Task",
    "image": [
      "https://example.com/photos/1x1/photo.jpg"
    ],
    "datePublished": "2015-02-05T08:00:00+08:00",
    "dateModified": "2015-02-05T09:20:00+08:00",
    "author": [{
      "@type": "Person",
      "name": "Jane Doe",
      "url": "https://example.com/profile/janedoe123"
    }]
  }

  const jsonLdReviews = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "Movie",
          "url": "https://example.com/2019-best-picture-noms#a-star-is-born",
          "name": "New York",
          "image": "https://example.com/photos/6x9/photo.jpg",
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "John D."
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "90",
            "bestRating": "100",
            "ratingCount": "19141"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "Movie",
          "name": "Bohemian Rhapsody",
          "url": "https://example.com/2019-best-picture-noms#bohemian-rhapsody",
          "image": "https://example.com/photos/6x9/photo.jpg",
          "dateCreated": "2018-11-02",
          "director": {
            "@type": "Person",
            "name": "Bryan Singer"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "3"
            },
            "author": {
              "@type": "Person",
              "name": "Vin S."
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "61",
            "bestRating": "100",
            "ratingCount": "21985"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": "3",
        "item": {
          "@type": "Movie",
          "name": "Black Panther",
          "url": "https://example.com/2019-best-picture-noms#black-panther",
          "image": "https://example.com/photos/6x9/photo.jpg",
          "dateCreated": "2018-02-16",
          "director": {
            "@type": "Person",
            "name": "Ryan Coogler"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "2"
            },
            "author": {
              "@type": "Person",
              "name": "Trevor R."
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "96",
            "bestRating": "100",
            "ratingCount": "88211"
          }
        }
      }
    ]
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How to find an apprenticeship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>"
      }
    }, {
      "@type": "Question",
      "name": "Whom to contact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days."
      }
    }]
  }
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


      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReviews) }}
        />
        <Reviews />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <Accordions />
      </section>
      <Button variant="link" className="px-0 text-gray-300">
        more
      </Button>
      <p className="text-base font-normal text-[#000000] pb-2.5">
        PERSONAL INJURY VIDEOS FOR LOS ANGELES
      </p>
      <Videos />



      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArtical) }}
        />
        <p className="text-xs font-normal text-black my-3">ARTICLES</p>
        <Articals />
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

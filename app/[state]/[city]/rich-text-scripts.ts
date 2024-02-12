export const RICH_TEXT_JSON = {
  ARTICLE: {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Now Launch Newton Task",
    image: ["https://example.com/photos/1x1/photo.jpg"],
    datePublished: "2015-02-05T08:00:00+08:00",
    dateModified: "2015-02-05T09:20:00+08:00",
    author: [
      {
        "@type": "Person",
        name: "Jane Doe",
        url: "https://example.com/profile/janedoe123",
      },
    ],
  },
  REVIEW: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: "1",
        item: {
          "@type": "Movie",
          url: "https://example.com/2019-best-picture-noms#a-star-is-born",
          name: "New York",
          image: "https://example.com/photos/6x9/photo.jpg",
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            author: {
              "@type": "Person",
              name: "John D.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "90",
            bestRating: "100",
            ratingCount: "19141",
          },
        },
      },
      {
        "@type": "ListItem",
        position: "2",
        item: {
          "@type": "Movie",
          name: "Bohemian Rhapsody",
          url: "https://example.com/2019-best-picture-noms#bohemian-rhapsody",
          image: "https://example.com/photos/6x9/photo.jpg",
          dateCreated: "2018-11-02",
          director: {
            "@type": "Person",
            name: "Bryan Singer",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "3",
            },
            author: {
              "@type": "Person",
              name: "Vin S.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "61",
            bestRating: "100",
            ratingCount: "21985",
          },
        },
      },
      {
        "@type": "ListItem",
        position: "3",
        item: {
          "@type": "Movie",
          name: "Black Panther",
          url: "https://example.com/2019-best-picture-noms#black-panther",
          image: "https://example.com/photos/6x9/photo.jpg",
          dateCreated: "2018-02-16",
          director: {
            "@type": "Person",
            name: "Ryan Coogler",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "2",
            },
            author: {
              "@type": "Person",
              name: "Trevor R.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "96",
            bestRating: "100",
            ratingCount: "88211",
          },
        },
      },
    ],
  },
  FAQ: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to find an apprenticeship?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>",
        },
      },
      {
        "@type": "Question",
        name: "Whom to contact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days.",
        },
      },
    ],
  },
};
const jsonLdArtical = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Now Launch Newton Task",
  image: ["https://example.com/photos/1x1/photo.jpg"],
  datePublished: "2015-02-05T08:00:00+08:00",
  dateModified: "2015-02-05T09:20:00+08:00",
  author: [
    {
      "@type": "Person",
      name: "Jane Doe",
      url: "https://example.com/profile/janedoe123",
    },
  ],
};

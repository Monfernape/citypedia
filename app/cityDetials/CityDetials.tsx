"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import CityPreviewCard from "../components/CityPreviewCard";
const citiesData = [
  {
    name: "New York City",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    country: "USA",
    population: 8537673,
    density: 11226.2,
    timezone: "America/New_York",
  },
  {
    name: "Tokyo",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    country: "Japan",
    population: 13929286,
    density: 6226,
    timezone: "Asia/Tokyo",
  },
  {
    name: "London",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    country: "UK",
    population: 8908081,
    density: 5667,
    timezone: "Europe/London",
  },
  {
    name: "Paris",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    country: "France",
    population: 2148327,
    density: 20781,
    timezone: "Europe/Paris",
  },
  {
    name: "Sydney",
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    country: "Australia",
    population: 5312163,
    density: 3992,
    timezone: "Australia/Sydney",
  },
];

interface City {
  name: string;
  imageUrl: string;
  country: string;
  population: number;
  density: number;
  timezone: string;
}

export default function CityDetails() {
  const [searchText, setSearchText] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredCities = citiesData.filter((city) => {
    return city.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="p-4">
      <div className="relative w-full max-w-2xl my-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          type="text"
          placeholder="Search City"
          className="pl-12 pr-4"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-4 gap-6 w-full max-w-2xl mx-auto">
        {filteredCities.map((city, index) => {
          return <CityPreviewCard key={index} city={city} />;
        })}
      </div>
    </div>
  );
}

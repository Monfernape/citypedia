"use client";
import { useState } from "react";
import useSWR from 'swr'
import { useRouter } from "next/navigation";
import CityPreviewCard from "./CityPreviewCard";
import Searchbar from "./Searchbar";
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

export default function CityDetails() {
  const {data: cities = citiesData, isLoading} = useSWR<typeof citiesData>('')

  const handleCitySearch = (query: string) => {};

  return (
    <div className="flex items-center flex-col w-full p-3">
      <Searchbar onSearchCities={handleCitySearch} />
      <div className="flex flex-col gap-3 w-full max-w-2xl">
        {cities.map((city, index) => (
          <CityPreviewCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
}

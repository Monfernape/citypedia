"use client";
import { useState } from "react";
import useSWR from 'swr'
import CityPreviewCard from "./CityPreviewCard";
import Searchbar from "./Searchbar";
import { getCityByQuery } from "@/server/api.service";

export default function CityDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const {data: cities = [] } = useSWR(searchQuery, () => getCityByQuery(searchQuery));

  const handleCitySearch = (query: string) => {
    setSearchQuery(query);
  };

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

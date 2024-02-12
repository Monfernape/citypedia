"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  onSearchCities: (query: string) => void;
};

export default function Searchbar({ onSearchCities }: Props) {
  const [query, setQuery] = useState("");
  return (
    <div className=" flex gap-3 w-full max-w-2xl py-6">
      <Input
        type="text"
        placeholder="Search city"
        className="pl-12 pr-4"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button onClick={() => onSearchCities(query)}>Search</Button>
    </div>
  );
}

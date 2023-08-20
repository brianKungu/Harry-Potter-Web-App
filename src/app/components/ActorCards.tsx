"use client";
import React, { useEffect, useState } from "react";
import { Characters } from "../../../interface/data.t";
import ActorCard from "./ActorCard";
import SearchBar from "./search/SearchBar";

export default function ActorCards() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch("/api/characters");
      const characters = await response.json();
      setCharacters(characters);
    };
    getCharacters();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <SearchBar getSearchResults={(results: any) => setCharacters(results)} />

      <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3">
        {characters.map((character) => (
          <ActorCard
            key={character.id}
            link={`/character/${character.id}`}
            name={character.name}
            dateOfBirth={character.dateOfBirth}
            imageSrc={character.image}
          />
        ))}
      </div>
    </div>
  );
}

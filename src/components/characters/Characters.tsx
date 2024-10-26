"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Character {
  id: number;
  name: string;
  image: string;
}

const characters: Character[] = [
  { id: 1, name: "Daemon Targaryen", image: "/characters/daemon.jpg" },
  { id: 2, name: "Daenerys Targaryen", image: "/characters/daenerys.jpg" },
  { id: 3, name: "Tyrion Lannister", image: "/characters/tyrion.jpg" },
  { id: 4, name: "Jon Snow", image: "/characters/jon.jpg" },
  { id: 5, name: "Cersei Lannister", image: "/characters/cersei.jpg" },
  { id: 6, name: "Rhaenyra Targaryen", image: "/characters/rhaenyra.jpg" },
  { id: 7, name: "Aemond Targaryen", image: "/characters/aemond.jpg" },
];

const Characters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto p-4">
      <h3 className="text-center text-4xl font-bold text-white mb-4 mt-4 ">
        Characters
      </h3>

      <div className="flex items-center mb-8 relative w-full md:w-96 mt-4 z-0 md:ml-auto">
        <input
          type="text"
          placeholder="Search for a character..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-md border w-full border-gray-700 text-black pl-10"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <Link
              key={character.id}
              href={`/characters/${character.id}`}
              passHref
            >
              <div className="group relative border-2 border-gray-800 bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:border-gray-300">
                <div className="relative w-full h-48">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-white transition-colors duration-300">
                    {character.name}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-300">No characters found :(</p>
        )}
      </div>
    </section>
  );
};

export default Characters;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Dragon {
  name: string;
  image: string;
}

const dragons: Dragon[] = [
  { name: "Seasmoke", image: "/dragons/seasmoke.jpg" },
  { name: "Sunfyre", image: "/dragons/sunfyre.jpg" },
  { name: "Drogon", image: "/dragons/drogon.jpg" },
  { name: "Caraxes", image: "/dragons/caraxes.jpg" },
  { name: "Vhagar", image: "/dragons/vhagar.jpg" },
  { name: "Dreamfyre", image: "/dragons/dreamfyre.jpg" },
  { name: "Silverwing", image: "/dragons/silverwing.jpg" },
  { name: "Vermithor", image: "/dragons/vermithor.jpg" },
];

const DragonList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDragons = dragons.filter((dragon) =>
    dragon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0 mt-2">
          <h3 className="text-center text-3xl font-bold text-white mr-4">
            Dracarys!
          </h3>
          <div className="relative w-32 h-32 flex justify-center">
            <Image
              src="/fire.gif"
              alt="Dracarys GIF"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex items-center mb-8 relative w-full md:w-96 z-0">
          <input
            type="text"
            placeholder="Search for a dragon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-md border w-full border-gray-700 text-black pl-10 z-0"
          />
          <FaSearch className="absolute left-3 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDragons.length > 0 ? (
          filteredDragons.map((dragon, index) => (
            <Link key={index} href={`/dragons/${dragon.name}`} passHref>
              <div
                key={index}
                className="group relative border-2 border-gray-800 bg-black rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:border-gray-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={dragon.image}
                    alt={dragon.name}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-white transition-colors duration-300">
                    {dragon.name}
                  </h3>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-300">No dragons are found :( </p>
        )}
      </div>
    </section>
  );
};

export default DragonList;

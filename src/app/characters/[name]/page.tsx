"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const CharacterDetail: React.FC = () => {
  const characters = [
    {
      name: "Daemon",
      id: 1,
      image: "/characters/daemon.jpg",
      age: 30,
      kills: ["House Velaryon", "Craghas Drahar"],
      dragon: "Caraxes",
      quote: "The only thing I have to offer is the truth.",
    },
    {
      name: "Daenerys Targaryen",
      id: 2,
      image: "/characters/daenerys.jpg",
      age: 25,
      kills: ["Ramsay Bolton", "Harrag", "King's Landing"],
      dragon: "Drogon",
      quote: "I will take what is mine.",
    },
    {
      name: "Tyrion Lannister",
      id: 3,

      image: "/characters/tyrion.jpg",
      age: 36,
      kills: ["Shae", "Stannis Baratheon"],
      dragon: "None",
      quote: "I drink and I know things.",
    },
    {
      name: "Jon Snow",
      id: 4,
      image: "/characters/jon.jpg",
      age: 28,
      kills: ["Mance Rayder", "White Walkers"],
      dragon: "Rhaegal",
      quote: "The things I do for love.",
    },
    {
      name: "Cersei Lannister",
      id: 5,
      image: "/characters/cersei.jpg",
      age: 45,
      kills: ["Margaery Tyrell", "Tommen Baratheon"],
      dragon: "None",
      quote: "When you play the game of thrones, you win or you die.",
    },
    {
      name: "Rhaenyra Targaryen",
      id: 6,
      image: "/characters/rhaenyra.jpg",
      age: 29,
      kills: ["Aegon II"],
      dragon: "Syrax",
      quote: "I will not be bullied.",
    },
    {
      name: "Aemond Targaryen",
      id: 7,
      image: "/characters/aemond.jpg",
      age: 27,
      kills: ["Lucerys Velaryon"],
      dragon: "Vhagar",
      quote: "The first one to die is the one who hesitates.",
    },
  ];

  const params = useParams();
  const characterName = params.name as string;
  const characterInfo = characters.find(
    (c) => c.id === parseInt(characterName)
  );

  return (
    <div className="container mx-auto">
      <Header />
      {characterInfo ? (
        <div className="bg-black p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            {characterInfo.name}
          </h3>
          <img
            src={characterInfo.image}
            alt={characterInfo.name}
            className="w-full h-96 object-contain mb-6 rounded-lg shadow-lg border-2 border-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-95"
          />
          <p className="text-lg text-gray-300 mb-2">
            <strong>Age:</strong> {characterInfo.age}
          </p>
          <p className="text-lg text-gray-300 mb-2">
            <strong>Kills:</strong> {characterInfo.kills.join(", ")}
          </p>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Dragon:</strong> {characterInfo.dragon || "None"}
          </p>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Quote:</strong> "{characterInfo.quote}"
          </p>
        </div>
      ) : (
        <p className="text-lg text-gray-300 mb-4">No details available.</p>
      )}
      <Footer />
    </div>
  );
};

export default CharacterDetail;

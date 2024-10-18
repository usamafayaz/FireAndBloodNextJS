"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Sample data for dragon details
const dragonDetails: Record<
  string,
  {
    pastRiders: string[];
    size: string;
    age: string;
    otherName: string;
    origin: string;
    description: string;
    image: string;
  }
> = {
  Seasmoke: {
    pastRiders: ["Laenor Velaryon"],
    size: "Medium",
    age: "Unknown",
    otherName: "None",
    origin: "Driftmark",
    description:
      "Seasmoke is a swift and agile dragon, favored by Laenor Velaryon.",
    image: "/dragons/seasmoke.jpg",
  },
  Sunfyre: {
    pastRiders: ["Aegon II Targaryen"],
    size: "Large",
    age: "Unknown",
    otherName: "The Golden Beast",
    origin: "Dragonstone",
    description:
      "Known for its golden scales, Sunfyre is majestic but fierce in battle.",
    image: "/dragons/sunfyre.jpg",
  },
  Drogon: {
    pastRiders: ["Daenerys Targaryen"],
    size: "Very Large",
    age: "7 years",
    otherName: "The Black Dread",
    origin: "Valyria",
    description:
      "Drogon, the fiercest of Daenerys' dragons, is named after her late husband Khal Drogo.",
    image: "/dragons/drogon.jpg",
  },
  Caraxes: {
    pastRiders: ["Daemon Targaryen"],
    size: "Large",
    age: "Unknown",
    otherName: "The Blood Wyrm",
    origin: "Dragonstone",
    description:
      "A terrifying dragon known for its blood-red scales and ferocity in battle.",
    image: "/dragons/caraxes.jpg",
  },
  Vhagar: {
    pastRiders: ["Visenya Targaryen", "Laena Velaryon", "Aemond Targaryen"],
    size: "Enormous",
    age: "180 years",
    otherName: "None",
    origin: "Old Valyria",
    description:
      "One of the oldest and largest dragons, Vhagar was ridden by many Targaryen legends.",
    image: "/dragons/vhagar.jpg",
  },
  Dreamfyre: {
    pastRiders: ["Rhaena Targaryen", "Helaena Targaryen"],
    size: "Large",
    age: "Unknown",
    otherName: "None",
    origin: "Dragonstone",
    description:
      "Dreamfyre is graceful and known for its loyalty to the Targaryen line.",
    image: "/dragons/dreamfyre.jpg",
  },
  Silverwing: {
    pastRiders: ["Alysanne Targaryen"],
    size: "Large",
    age: "100+ years",
    otherName: "None",
    origin: "Dragonstone",
    description:
      "Silverwing is a noble dragon that was especially gentle with its riders.",
    image: "/dragons/silverwing.jpg",
  },
  Vermithor: {
    pastRiders: ["Jaehaerys I Targaryen", "Hugh Hammer"],
    size: "Huge",
    age: "100 years",
    otherName: "The Bronze Fury",
    origin: "Dragonstone",
    description:
      "Vermithor, known as the Bronze Fury, was one of the most fearsome dragons of its time.",
    image: "/dragons/vermithor.jpg",
  },
};

const DragonDetail: React.FC = () => {
  const params = useParams();

  const dragonName = params.id as string;
  const dragonInfo = dragonDetails[dragonName];

  return (
    <div className="container mx-auto">
      <Header />

      <div className="bg-black p-8 rounded-lg shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-4 tracking-widest">
          {dragonName}
        </h3>

        <img
          src={dragonInfo.image}
          alt={dragonName}
          className="w-full h-96 object-contain mb-6 rounded-lg shadow-lg border-2 border-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-95"
        />
        {dragonInfo ? (
          <>
            <p className="text-lg text-gray-300 mb-2">
              <strong>Other Name:</strong> {dragonInfo.otherName}
            </p>
            <p className="text-lg text-gray-300 mb-2">
              <strong>Size:</strong> {dragonInfo.size}
            </p>
            <p className="text-lg text-gray-300 mb-2">
              <strong>Age:</strong> {dragonInfo.age}
            </p>
            <p className="text-lg text-gray-300 mb-2">
              <strong>Origin:</strong> {dragonInfo.origin}
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <strong>Past Riders:</strong> {dragonInfo.pastRiders.join(", ")}
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <strong>Description:</strong> {dragonInfo.description}
            </p>
          </>
        ) : (
          <p className="text-lg text-gray-300 mb-4">No details available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DragonDetail;

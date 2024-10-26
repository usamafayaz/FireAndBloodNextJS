// src/app/page.tsx
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DragonList from "../components/dragons/Dragons";
import Characters from "../components/characters/Characters";
import Image from "next/image";
import QuoteBanner from "@/components/banner/Banner";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 bg-black">
        <DragonList />
        <QuoteBanner />
        <Characters />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

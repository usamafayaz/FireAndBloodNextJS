// src/app/page.tsx
import DragonList from "../components/dragons/Dragons";
import Characters from "../components/characters/Characters";
import QuoteBanner from "@/components/banner/Banner";

const Home: React.FC = () => {
  return (
    <div>
      <main className="container mx-auto p-4 bg-black">
        <DragonList />
        <QuoteBanner />
        <Characters />
      </main>
    </div>
  );
};

export default Home;

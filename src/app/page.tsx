// src/app/page.tsx
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DragonList from "../components/dragons/Dragons";
import Characters from "../components/characters/Characters";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 bg-black">
        <DragonList />
        <div className="w-full mt-8">
          <img
            src="/banner.jpg"
            alt="House of Dragons"
            className="w-full h-auto rounded-md"
          />
        </div>
        <Characters />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

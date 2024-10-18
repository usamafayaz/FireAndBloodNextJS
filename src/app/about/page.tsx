// app/about/page.tsx
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>Learn more about our journey and mission.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;

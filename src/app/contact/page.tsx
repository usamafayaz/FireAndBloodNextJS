// app/contact/page.tsx
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>Feel free to reach out for any inquiries.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

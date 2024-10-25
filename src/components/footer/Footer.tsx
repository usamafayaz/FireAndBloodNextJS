// components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg italic mb-4">
          "Fire and Blood." – House Targaryen
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()}
          <span className="font-bold text-white"> House Of Dragons</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

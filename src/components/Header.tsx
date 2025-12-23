import { Link } from "react-router-dom";

const Header = () => {
  const name: string = "Anton Bringner";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">{name} portfolio</div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

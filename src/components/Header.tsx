import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <span className="text-xl font-bold">
          <Link to="/" className="hover:text-blue-600">
            Anton Bringner portfolio
          </Link>
        </span>
        <div className="flex space-x-6">
          <a href="/#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#resume" className="hover:text-blue-600">
            Resume
          </a>
          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

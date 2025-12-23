import { Link } from "react-router-dom";

export const Footer = () => {
  const name: string = "Anton Bringner";
  const day = new Date();
  const year = day.getFullYear();

  const gitHub = "https://github.com/Bringdown";
  const linkedIn = "https://www.linkedin.com/in/anton-bringner-635b402a9/";
  const source = "https://github.com/Bringdown/Bringdown.github.io";

  return (
    <footer className="text-center mb-4">
      <ul>
        <li>
          <a href={gitHub} target="_blank" rel="noopener noreferrer" />
        </li>
        <li>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" />
        </li>
        <li>
          <a href={source} target="_blank" rel="noopener noreferrer" />
        </li>
      </ul>
      &copy; Copyright {year} {"- "}
      <Link to="/" className="hover:text-blue-600 font-roboto">
        {name}
      </Link>
    </footer>
  );
};

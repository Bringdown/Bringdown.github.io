import { Link } from "react-router-dom";

export const Footer = () => {
  const name: string = "Anton Bringner";
  const day = new Date();
  const year = day.getFullYear();

  const gitHub = "https://github.com/Bringdown";
  const linkedIn = "https://www.linkedin.com/in/anton-bringner-635b402a9/";
  const source = "https://github.com/Bringdown/Bringdown.github.io";

  return (
    <footer className="bg-white pt-12 text-center">
      <ul className="flex justify-center gap-6 mb-6">
        <li>
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 uppercase"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 uppercase"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 uppercase"
          >
            Source
          </a>
        </li>
      </ul>
      &copy; Copyright {year} {"- "}
      <Link to="/" className="hover:text-blue-600 font-bold">
        {name}
      </Link>
    </footer>
  );
};

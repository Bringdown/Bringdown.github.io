const Home = () => {
  const name: string = "Anton Bringner";

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">{name}</h1>
      <h2 className="text-2xl text-gray-700 mb-6">
        Software Developer | React & TypeScript
      </h2>
      <p className="text-gray-600 mb-8">
        I build modern, responsive web apps and focus on clean, maintainable
        code.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;

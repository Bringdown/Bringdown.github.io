import { About } from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const name: string = "Anton Bringner";

  return (
    <>
      <section id="about" className="py-24">
        <div>
          <About />
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;

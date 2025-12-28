import aboutText from "../content/aboutText.md?raw";

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="whitespace-pre-line text-gray-700">{aboutText}</p>
      </div>
    </section>
  );
};

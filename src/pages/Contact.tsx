const Contact = () => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 mt-6">Contact Me</h2>
      <p className="text-gray-600 mb-4">
        Email:{" "}
        <a
          href="mailto:you@example.com"
          className="text-blue-600 hover:underline"
        >
          you@example.com
        </a>
      </p>
      <p className="text-gray-600">
        GitHub:{" "}
        <a
          href="https://github.com/Bringdown"
          className="text-blue-600 hover:underline"
        >
          github.com/username
        </a>
      </p>
      <p className="text-gray-600">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/anton-bringner-635b402a9/"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/username
        </a>
      </p>
    </div>
  );
};

export default Contact;

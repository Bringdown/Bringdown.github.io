const Contact = () => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 mt-6">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Message"
          rows={5}
          required
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

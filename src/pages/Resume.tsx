export const Resume = () => {
  const RESUME_URL = "/anton_bringner_resume.pdf";

  return (
    <div className="flex justify-center gap-4 mt-6">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-300 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        View Resume
      </a>
      <a
        href={RESUME_URL}
        download
        className="bg-gray-300 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download PDF</span>
      </a>
    </div>
  );
};

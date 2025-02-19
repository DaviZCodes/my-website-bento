import React, { useEffect, useRef } from "react";

interface TechnologiesModalProps {
  onClose: () => void; // Prop for closing the modal
}

const TechnologiesModal: React.FC<TechnologiesModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
      <div
        className="relative border-2 border-[#fdaf67e3] bg-[#f5e2b6] p-8 rounded-xl max-w-lg mx-auto shadow-md
        dark:bg-[#112336] dark:border-[#e0ee60]"
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-5 text-black text-3xl font-bold cursor-pointer
          dark:text-[#e0ee60]"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          &times;
        </button>
        <div
          className="text-2xl font-semibold text-black mb-3
        dark:text-[#e0ee60]"
        >
          Technologies I use:
        </div>

        <div
          className="text-xl text-black mt-3
        dark:text-[#e0ee60]"
        >
          <ul className="flex flex-col list-disc pl-3 gap-3">
            <li>Python, JavaScript, TypeScript, C, C++, Java, x86 Assembly</li>
            <li>
              HTML, CSS, React, Redux, NextJS, Tailwind, SCSS, NodeJS, Express,
              Convex.dev, Postman, Restful APIs, Docker, SQL, MongoDB, Git,
              Vercel
            </li>
            <li>
              OpenCV, AprilTag, Robot Operating System (ROS), Machine Learning,
              Replicate.com, Convolutional Neural Networks, Jupyter Notebooks
            </li>
            <li>
              Video Editing (Final Cut Pro, Sony Vegas Pro, DaVinci Resolve),
              UI/UX, Adobe Photoshop, Figma
            </li>
            <li>Google Suite, Microsoft Office, macOS, Windows, Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesModal;

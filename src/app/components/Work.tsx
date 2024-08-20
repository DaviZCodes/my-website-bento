import Link from "next/link";

export default function Work() {
  return (
    <section className="bg-slate-200 py-6 px-2 lg:px-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        {/*<div className="grid grid-cols-1 gap-8">*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="" target="_blank" title="Click for more">
            <div className="bg-[#232f3e] text-[#f2aa3f]  p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointer font-semibold">Amazon</h2>
              <p>
                I was a full-stack developer who worked in Amazon&apos;s seller
                development organization. This has been my favorite and most
                insightful career experience so far.
              </p>
            </div>
          </Link>
          <Link
            href="http://bulletin.engineering.nyu.edu/preview_course_nopop.php?catoid=15&coid=36543"
            target="_blank"
            title="Click for more"
          >
            <div className="bg-[#4d1782] text-white  p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Teaching Assistant</h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                New York University
              </h2>
              <p>
                I am a teaching assistant for CS-UY 2214 - Computer Architecture
                and Organization, a class on low-level programming, digital
                logic design, and hardware design programming.
                {/*I grade homework,
                host office hours, and teach a weekly 2 hour recitation.*/}
              </p>
            </div>
          </Link>
          <Link
            href="https://www.paysfer.com"
            target="_blank"
            title="Click for more"
          >
            <div className="bg-[#f3c844] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                Paysfer eMart
              </h2>
              <p>
                I was a full-stack engineer, developing several responsive
                webpages, enhancing the user authentication and payment
                gateways, and creating APIs that fetch user data and shops.{" "}
                {/*I
                also worked with Google Cloud Platform (GCP), ensuring data
  integrity and functionality.*/}
              </p>
            </div>
          </Link>
          <Link
            href="https://engineering.nyu.edu/academics/undergraduate/tutoring-center"
            target="_blank"
            title="Click for more"
          >
            <div className="bg-[#4d1782] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Computer Science Tutor</h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                Polytechnic Tutoring Center
              </h2>
              <p>
                I was a tutor for the Introduction to Programming, Data
                Structures and Algorithms, and Object-Oriented Programming
                courses at NYU.
              </p>
            </div>
          </Link>
          <Link
            href="https://www.tutormundi.com"
            target="_blank"
            title="Click for more"
          >
            <div className="bg-[#5c25f5] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointe font-semibold">
                TutorMundi
              </h2>
              <p>
                I was a frontend developer, identifying and resolving numerous
                bugs, while also making improvements to the user interface.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/*
export default function Work() {
  return (
    <section className="bg-white py-12 px-2 lg:px-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#4d1782] text-white  p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
            <Link
              href="http://bulletin.engineering.nyu.edu/preview_course_nopop.php?catoid=15&coid=36543"
              target="_blank"
              title="Click for more"
            >
              <h3 className="text-xl font-bold mb-2">Teaching Assistant</h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                New York University
              </h2>
              <p>
                I am a teaching assistant for CS-UY 2214 - Computer Architecture
                and Organization, a class on low-level programming, digital
                logic design, and hardware design programming.
              </p>
            </Link>
          </div>
          <div className="bg-[#f3c844] p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
            <Link
              href="https://www.paysfer.com"
              target="_blank"
              title="Click for more"
            >
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                Paysfer eMart
              </h2>
              <p>
                I was a full-stack engineer, developing several responsive
                webpages, enhancing the user authentication and payment
                gateways, and creating APIs that fetch user data and shops.
              </p>
            </Link>
          </div>

          <div className="bg-[#4d1782] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
            <Link
              href="https://engineering.nyu.edu/academics/undergraduate/tutoring-center"
              target="_blank"
              title="Click for more"
            >
              <h3 className="text-xl font-bold mb-2">Computer Science Tutor</h3>
              <h2 className="text-xl cursor-pointer font-semibold">
                Polytechnic Tutoring Center
              </h2>
              <p>
                I was a tutor for the Introduction to Programming, Data
                Structures and Algorithms, and Object-Oriented Programming
                courses at NYU.
              </p>
            </Link>
          </div>

          <div className="bg-[#5c25f5] text-white p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer">
            <Link
              href="https://www.tutormundi.com"
              target="_blank"
              title="Click for more"
            >
              <h3 className="text-xl font-bold mb-2">
                Software Engineer Intern
              </h3>
              <h2 className="text-xl cursor-pointe font-semibold">
                TutorMundi
              </h2>
              <p>
                I was a frontend developer, identifying and resolving numerous
                bugs, while also making improvements to the user interface.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

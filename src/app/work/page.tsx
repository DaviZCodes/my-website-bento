import Link from "next/link";

export default function Work() {
  return (
    <section
      className="flex flex-col min-h-screen bg-[#f7e6bc] px-60 py-6 items-center
    dark:bg-[#112336] dark:text-[#e0ee60] dark:border-[#e0ee60]"
    >
      <div className="w-full flex justify-start sticky top-0 z-10">
        <Link
          href={"/"}
          className="font-semibold text-xl px-3 py-2 mt-6 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-160
          dark:border-[#e0ee60]"
        >
          Home
        </Link>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-5xl font-bold mb-12">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkExperienceCard
            href="https://www.amazon.com"
            title="Software Engineer Intern"
            company="Amazon"
            description="I was a full-stack developer who worked in Amazon's seller development organization. This has been my favorite and most insightful career experience so far."
            bgColor="#232f3e"
            textColor="#f2aa3f"
          />
          <WorkExperienceCard
            href="http://bulletin.engineering.nyu.edu/preview_course_nopop.php?catoid=15&coid=36543"
            title="Teaching Assistant"
            company="New York University"
            description="I am a teaching assistant for CS-UY 2214 - Computer Architecture and Organization, a class on low-level programming, digital logic design, and hardware design programming."
            bgColor="#4d1782"
            textColor="white"
          />
          <WorkExperienceCard
            href="https://www.paysfer.com"
            title="Software Engineer Intern"
            company="Paysfer eMart"
            description="I was a full-stack engineer, developing several responsive webpages, enhancing the user authentication and payment gateways, and creating APIs that fetch user data and shops."
            bgColor="#f3c844"
            textColor="black"
          />
          <WorkExperienceCard
            href="https://engineering.nyu.edu/academics/undergraduate/tutoring-center"
            title="Computer Science Tutor"
            company="Polytechnic Tutoring Center"
            description="I was a tutor for the Introduction to Programming, Data Structures and Algorithms, and Object-Oriented Programming courses at NYU."
            bgColor="#4d1782"
            textColor="white"
          />
          <WorkExperienceCard
            href="https://www.tutormundi.com"
            title="Software Engineer Intern"
            company="TutorMundi"
            description="I was a frontend developer, identifying and resolving numerous bugs, while also making improvements to the user interface."
            bgColor="#5c25f5"
            textColor="white"
          />
        </div>
      </div>
    </section>
  );
}

interface WorkExperienceCardProps {
  href: string;
  title: string;
  company: string;
  description: string;
  bgColor: string;
  textColor: string;
}

// This is the class which will display each work experience
const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  href,
  title,
  company,
  description,
  bgColor,
  textColor,
}) => {
  return (
    <Link href={href} target="_blank" title="Click for more">
      <div
        className="border-2 border-yellow-50 p-6 rounded-xl shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h2 className="text-xl cursor-pointer font-semibold">{company}</h2>
        <p className="text-left mt-2">{description}</p>
      </div>
    </Link>
  );
};

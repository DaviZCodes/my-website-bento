import Link from "next/link";

export default function Work() {
  return (
    <section className="bg-slate-200 py-6 px-2 lg:px-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        className="p-6 rounded-lg shadow-md transition-transform ease-in-out duration-300 scale-x-100 hover:scale-[1.02] cursor-pointer"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <h2 className="text-xl cursor-pointer font-semibold">{company}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

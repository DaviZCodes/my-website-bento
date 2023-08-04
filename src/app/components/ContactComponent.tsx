import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-blue-800 py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-xl text-white">
          I'm open to collaborating on projects, whether it is coding,
          designing, video-making or anythings. Feel free to reach out to me
          through any of the links below:
        </p>
        <div className="flex justify-center py-6 gap-8">
          <Link href="https://github.com/DaviZCodes">
            <BsGithub size={50} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/in/davizheng/">
            <BsLinkedin size={50} color="white" />
          </Link>
          <Link href="mailto:daviz.contactme@gmail.com">
            <AiOutlineMail size={50} color="white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

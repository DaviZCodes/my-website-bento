import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-blue-800 py-6 px-2 lg:px-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-white">
          I&apos;m open to meeting new people whether it is collaborating on
          projects, video-making, or working out. Feel free to reach out to me
          through any of the links below:
        </p>
        <div className="flex justify-center py-6 gap-8">
          <Link href="https://github.com/DaviZCodes" target="_blank">
            <span className="sr-only">Visit my GitHub profile</span>
            <BsGithub size={50} color="white" title="My GitHub profile" />
          </Link>
          <Link href="https://www.linkedin.com/in/davizheng/" target="_blank">
            <span className="sr-only">Visit my LinkedIn profile</span>
            <BsLinkedin size={50} color="white" title="My LinkedIn profile" />
          </Link>
          <Link href="mailto:daviz.contactme@gmail.com">
            <span className="sr-only">Send me an email </span>
            <AiOutlineMail size={50} color="white" title="My Email" />
          </Link>
        </div>
      </div>
    </section>
  );
}

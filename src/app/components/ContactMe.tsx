import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function ContactMe() {
  return (
    <section className="text-lg">
      <div className="border-2 border-yellow-50 transition duration-160 hover:border-[#fdaf67e3] rounded-xl shadow-sm p-6 bg-[#f5e2b6]">
        <div className="font-bold text-2xl">Contact me!</div>
        <div className="mt-3">
          I&apos;m a strong believer that you can learn something from everyone,
          so I&apos;m always open to collaborate and meet new people.
        </div>

        <div className="mt-3">Email: daviz.contactme@gmail.com</div>

        <div className="flex justify-center py-6 mt-3 gap-3">
          <div>
            <Link href="https://github.com/DaviZCodes" target="_blank">
              <span className="sr-only">Visit my GitHub profile!</span>
              <BsGithub size={50} title="My GitHub profile!" />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/davizheng/" target="_blank">
              <span className="sr-only">Visit my LinkedIn profile!</span>
              <BsLinkedin size={50} title="My LinkedIn profile!" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.youtube.com/@davitothestars"
              target="_blank"
            >
              <span className="sr-only">Check out my YouTube channel! </span>
              <BsYoutube size={50} title="My YouTube channel!" />
            </Link>
          </div>
          <div>
            <Link href="mailto:daviz.contactme@gmail.com">
              <span className="sr-only">Send me an email!</span>
              <AiOutlineMail size={50} title="Send me an email!" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

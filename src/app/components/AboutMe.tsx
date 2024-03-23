import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="py-12 px-3 lg:px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">A Little About Myself</h2>

        <p className="text-lg">
          I figured this is my personal website, so I will make it personal. If
          you want formality, visit my{" "}
          <Link
            href="https://www.linkedin.com/in/davizheng/"
            target="_blank"
            title="Click for LinkedIn"
          >
            LinkedIn
          </Link>{" "}
          instead. This might seem false but I actually enjoy writing code. I
          love showing my family and friends my applications. I think
          that&apos;s the best thing about studying CS. Also, working in teams
          is fun. Being humble and striving to improve my skills is fun. Python
          and JavaScript are awesome languages. Data Structures and Algorithms
          is not fun. But I&apos;m still reading Cracking the Coding Interview
          because I have to. Hopefully, one day it works out.
          {/*Hello, I&apos;m Davi, a multifaceted full-stack engineer passionate
          about creating modern and responsive applications. I&apos;m fluent in
          four programming languages - Python, C, C++, and
          Javascript/Typescript. I&apos;m also fluent in four languages -
          English, Mandarin, Spanish, and Portuguese. Recently, I have gained
           high interest in developing Artificial Intelligence tools.*/}
        </p>
      </div>
    </section>
  );
}

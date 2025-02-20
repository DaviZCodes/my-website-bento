import Image from "next/image";

export default function BlogPosts() {
  return (
    <div className="flex flex-col mt-6 gap-y-6">
      {blogPostEntries.map((entry, index) => (
        <BlogEntry key={index} {...entry} />
      ))}
    </div>
  );
}

function BlogEntry({
  datePosted,
  title,
  tag,
  image,
  content,
}: {
  datePosted: string;
  title: string;
  tag: string;
  image: string;
  content: string;
}) {
  return (
    <div className="bg-blue-800 text-white shadow-md rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div className="text-white text-base text-center">{datePosted}</div>
        <div
          className="text-black border-2 bg-orange-200 p-2 rounded-xl shadow-md
        dark:bg-[#e0ee60] dark:text-[#112336] dark:border-2 dark:border-[#112336]"
        >
          {tag}
        </div>
      </div>
      <h2
        className="text-2xl font-bold my-3 text-center
      xl:text-3xl"
      >
        {title}
      </h2>
      <div className="text-lg leading-7">
        {content.split("\n").map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </div>
      {image != "" && (
        <div className="w-auto mt-3">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
            title={title}
            alt={title}
          />
        </div>
      )}
      <HorizontalLine />
    </div>
  );
}

const blogPostEntries = [
  {
    datePosted: "February 19, 2025",
    title: "Entry #8: Website revamp",
    tag: "Update",
    image: "https://i.imgur.com/MqpKcPn.jpeg",
    content:
      "Oh my. It's exactly 12 midnight right now. It's Thursday on a school night. I have to study for my midterms. But I'm almost complete with the website. I'm just stuck on a responsiveness issue, but I'll resolve that soon. It's been many days of designing, developing, and also translating lol.\n\nIf there's a will, there's a way. Wow... I actually managed to pull this off. Just take a look at my design. It took me some time to design it. I gained some inspiration from bento-style websites, and I recently started liking these types of artistic websites a lot. The design is mine, and I am so proud of it. Just take a look at the picture. I know I'm not an artist, but that's why I'm an arter (if you get the joke, you're a real one).",
  },
  {
    datePosted: "February 18, 2025",
    title: "Entry #7: Last semester",
    tag: "Update",
    image: "",
    content:
      "It's my last semester of university. I have been enjoying my time. University was not exactly what I imagined it would be. I guess it's because I watched too many shows. I imagined it would be like High School Musical or something. I have some ideas planned, and I will make sure they turn into reality. I will be releasing the new version of my personal website soon.",
  },
  {
    datePosted: "Aug 20, 2024",
    title: "Entry #6: End of Summer",
    tag: "Update",
    image: "",
    content:
      "Last summer, I was living without air conditioning in NYC. There was no air conditioning unit in my room, which was odd and most likely not legal. Anyways, it was so hot and humid that I had all the windows and even my door opened. Mosquitoes entered through the window, resultingin countless late night mosquito chasing sessions. I couldn't sleep. I remember one night I had an exam at 8am in the morning, but I had to stay up until 3am dueling the mosquito.\n\nEver since moving out, I have been enjoying having an air conditioning unit, especially during the summer. In fact, I am so used to it that I even forget sometimes the nightmares of sleeping while burning and being bitten constantly. Hopefully, this means that I am able to be ready for my exams. I will try my best to not make this entry too long, but I grew alot this summer. Not grow as in height, which I do wish happened since who does not want to be a 6'10 freak athlete? But growing mentally and growing in my professional career. I have met so many amazing people, built strong relationships, and learned so much about what I'm studying at university (mostly cs related).\n\nSummer ending means the semester is starting again. I will be a senior. I will make sure to keep improving myself while also having fun. Having fun is also important.",
  },
  {
    datePosted: "Apr 22, 2024",
    title: "Entry #5: Life Changes",
    tag: "Update",
    image: "",
    content:
      "There is a saying that when one door closes, another one opens. But why can't I leave both doors open? Why can't I have both? I dislike that so many things are out of our control, but that's just the way it is. Anyways, it seems like my website changes have been reflected positively. People have complimented my UI.",
  },
  {
    datePosted: "Mar 28, 2024",
    title: "Entry #4: Blog Changes",
    tag: "Update",
    image: "",
    content:
      "Yeah, I know. It's been a while. I was sick - had a terrible weird fever dream about huge numbers. Anyways, I made some changes to the website. I think it looks better now. I still need to add more stuff lol like not hardcode each blog post. But I think that the recent changes enhance my website. Anyways, I should add some tags too, maybe some fun or cs related or school related tags? This post right now should be tagged as fun. Anyways, goodnight.",
  },
  {
    datePosted: "Jan 20, 2024",
    title: "Entry #3: Last day of winter break",
    tag: "Update",
    image: "",
    content:
      "Happy New Year. Tomorrow will be the last day of winter break. I just arrived to NYC from Brazil. It is freezing here (-7 degrees celsius), while it was almost 30 in Brazil. I had a blast. I really miss my family. Hopefully, I can learn a lot this semester, get good grades, build strong relationships, improve myself, and perhaps even win the competitive basketball intramural.",
  },
  {
    datePosted: "Oct 19, 2023",
    title: "Entry #2: Welcome Back",
    tag: "Update",
    image: "",
    content:
      "I didn't realize my last post was made 3 days ago. I thought I posted yesterday. Time passes so fast. I really enjoy just taking a moment to appreciate everything.",
  },
  {
    datePosted: "Oct 16, 2023",
    title: "Entry #1: Hello World",
    tag: "Fun",
    image: "",
    content:
      "If you're reading this, I love you.\n\nA Little About Myself: I figured this is my personal website, so I will make it personal. If you want formality, visit my LinkedIn instead. This might seem false but I actually enjoy writing code. I've been coding since middle school back in Brazil. I love showing my family and friends my applications. I think that's the best thing about studying CS. Also, working in teams is fun. Being humble and striving to improve my skills is fun. Python and JavaScript are awesome languages. Data Structures and Algorithms is not fun. But I'm still reading Cracking the Coding Interview because I have to. Hopefully, one day it works out.",
  },
];

function HorizontalLine() {
  return <hr className="mt-6 border-gray-300" />;
}

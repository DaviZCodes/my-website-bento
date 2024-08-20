export default function BlogPosts() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Aug 20, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #6: End of Summer
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          Last summer, I was living without air conditioning in NYC. There was
          no air conditioning unit in my room, which was odd and most likely not
          legal. Anyways, it was so hot and humid that I had all the windows and
          even my door opened. Mosquitoes entered through the window, resulting
          in countless late night mosquito chasing sessions. I couldn&apos;t
          sleep. I remember one night I had an exam at 8am in the morning, but I
          had to stay up until 3am dueling the mosquito.
          <br />
          <br />
          Ever since moving out, I have been enjoying having an air conditioning
          unit, especially during the summer. In fact, I am so used to it that I
          even forget sometimes the nightmares of sleeping while burning and
          being bitten constantly. Hopefully, this means that I am able to be
          ready for my exams.
          <br />
          <br />I will try my best to not make this entry too long, but I grew a
          lot this summer. Not grow as in height, which I do wish happened since
          who does not want to be a 6'10 freak athlete? But grow mentally and
          grow in my professional career. I have met so many amazing people,
          built strong relationships, and learned so much about what I&apos;m
          studying at university. Summer ending means the semester is starting
          again. I will be a senior. I will make sure to keep improving myself
          while also having fun. Having fun is also important.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Apr 22, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #5: Life Changes
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          There is a saying that when one door closes, another one opens. But
          why can&apos;t I leave both doors open? Why can&apos;t I have both? I
          dislike that so many things are out of our control, but that&apos;s
          just the way it is. Anyways, it seems like my website changes have
          been reflected positively. People have complimented my UI.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Mar 28, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #4: Blog Changes
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          Yeah, I know. It&apos;s been a while.
          <br /> <br />I was sick - had a terrible weird fever dream about huge
          numbers. Anyways, I made some changes to the website. I think it looks
          better now. I still need to add more stuff lol like not hardcode each
          blog post. But I think that the recent changes enhance my website.
          Anyways, I should add some tags too, maybe some fun or cs related or
          school related tags? This post right now should be tagged as fun.
          Anyways, goodnight.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Jan 20, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #3: Last day of winter break
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          Happy New Year. Tomorrow will be the last day of winter break. I just
          arrived to NYC from Brazil. It is freezing here (-7 degrees celsius),
          while it was almost 30 in Brazil. I had a blast. I really miss my
          family. Hopefully, this semester I can learn a lot, get good grades,
          build strong relationships, improve myself, and perhaps even win the
          competitive basketball intramural.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Oct 19, 2023</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #2: Welcome Back
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          I didn&apos;t realize my last post was made 3 days ago. I thought I
          posted yesterday. Time passes so fast. I really enjoy just taking a
          moment to appreciate everything.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-6 pr-6">
        <div className="text-gray-600 text-sm text-center">Oct 16, 2023</div>
        <div className="text-3xl font-bold text-gray-800 my-6 text-center">
          Entry #1: Hello World
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          If you&apos;re reading this, I love you.
        </div>
      </div>
    </div>
  );
}

function HorizontalLine() {
  return <hr className="mt-6 border-gray-300" />;
}

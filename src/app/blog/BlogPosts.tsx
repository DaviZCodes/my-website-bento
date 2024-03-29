export default function BlogPosts() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md py-6 pl-3 pr-3 text-center">
        <div className="text-gray-600 text-sm">Mar 28, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6">
          Entry #4: Blog Changes
        </div>
        <div className="text-gray-700 text-lg leading-7 lg:mx-10">
          Yeah, I know. It's been a while. I was sick - had a terrible weird
          fever dream about huge numbers. Anyways, I made some changes to the
          website. I think it looks better now. I still need to add more stuff
          lol like not hardcode each blog post. But I think that the recent
          changes enhance my website. Anyways, I should add some tags too, maybe
          some fun or cs related or school related tags? This post right now
          should be tagged as fun. Anyways, goodnight.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-3 pr-3 text-center">
        <div className="text-gray-600 text-sm">Jan 20, 2024</div>
        <div className="text-3xl font-bold text-gray-800 my-6">
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

      <div className="bg-white rounded-lg shadow-md py-6 pl-3 pr-3 text-center">
        <div className="text-gray-600 text-sm">Oct 19, 2023</div>
        <div className="text-3xl font-bold text-gray-800 my-6">
          Entry #2: Welcome Back
        </div>
        <div className="text-gray-700 text-lg leading-7">
          I didn&apos;t realize my last post was made 3 days ago. I thought I
          posted yesterday. Time passes so fast. I really enjoy just taking a
          moment to appreciate everything.
        </div>
        <HorizontalLine />
      </div>

      <div className="bg-white rounded-lg shadow-md py-6 pl-3 pr-3 text-center">
        <div className="text-gray-600 text-sm">Oct 16, 2023</div>
        <div className="text-3xl font-bold text-gray-800 my-6">
          Entry #1: Hello World
        </div>
        <div className="text-gray-700 text-lg leading-7">
          If you&apos;re reading this, I love you.
        </div>
      </div>
    </div>
  );
}

function HorizontalLine() {
  return <hr className="mt-6 border-gray-300" />;
}

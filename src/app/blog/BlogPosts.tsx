export default function BlogPosts() {
  return (
    <div>
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
    </div>
  );
}

function HorizontalLine() {
  return <hr className="mt-6 border-gray-300" />;
}

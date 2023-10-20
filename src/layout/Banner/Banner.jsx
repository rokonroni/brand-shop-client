
const Banner = () => {
  return (
    <div>
        <div className="bg-gray-200">
          <section className="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
            <article className="flex-col justify-center inline-flex self-stretch  p-6">
              <h2 className="uppercase font-semibold text-xl">Design</h2>
              <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl">
                Our 30 Year Journey
              </strong>
              <p className="text-sm pb-4">
                Join us as we revisit our roots, tracing the path from bright
                idea to industry disruptors with a plan to fight climate change
                while creating beautiful things.{" "}
              </p>
              <button className="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">
                Join us
              </button>
            </article>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Banner"
              />
            </figure>
          </section>
        </div>
    </div>
  );
};

export default Banner;

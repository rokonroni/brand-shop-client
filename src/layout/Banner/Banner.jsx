
const Banner = () => {
  return (
    <div>
        <div className="bg-gray-200 dark:bg-gray-700">
          <section className="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
            <article className="flex-col justify-center inline-flex self-stretch  p-6">
              <h2 className="uppercase font-semibold text-red-700 text-5xl">50% OFF</h2>
              <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl">
                For Black Friday 
              </strong>
              <p className="text-sm pb-4">
                Join us as we revisit our roots, tracing the path from bright
                idea to industry disruptors with a plan to fight climate change
                while creating beautiful things.{" "}
              </p>
              <button className="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white"> 
                Shop Now
              </button>
            </article>
            <figure className="w-full">
              <img
                src="/banner4.jpg"
                alt="Banner"
              />
            </figure>
          </section>
        </div>
    </div>
  );
};

export default Banner;


const CTA = () => {
  return (
    <div>
      <section className="bg-gray-600 dark:bg-gray-900 text-white text-center">
        <div className="py-8 px-20 mx-auto  sm:py-16 lg:px-6">
          <div className="px-20 flex flex-col ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white  dark:text-white">
              Let s find more that brings us together.
            </h2>
            <p className="mb-8 font-light text-white sm:text-xl dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mx-auto ">
              
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white border border-gray-300 hover:text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;

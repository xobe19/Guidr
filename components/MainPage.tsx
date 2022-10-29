const MainPage = () => {
  return (
    <div>
      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Site Name</span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            veniam quam mollitia,sit amet consectetur adipisicing elit.
            Possimus, veniam quam mollitia,
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:absolute lg:inset-y-10 lg:right-10 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="mainimg.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default MainPage;

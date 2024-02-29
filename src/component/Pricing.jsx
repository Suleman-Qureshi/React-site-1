import React from "react";

function Pricing() {
  return (
    <>
      <header className="w-screen h-screen px-44 max-2xl:px-40 max-md:px-2 py-28 bg-blend-lighten flex justify-center text-white">
        <div className="flex flex-col space-y-8 text-center mt-14">
          <h1 className="text-7xl max-lg:text-5xl font-bold">Our Pricing</h1>
          <p className="text-lg max-lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </header>
      <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex flex-col space-y-8">
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex text-center justify-center mt-12">
            <h1 className="text-6xl font-bold tracking-wide bg-gradient-to-br from-blue-500 to-cyan-400 py-3 bg-clip-text text-transparent">
              Choose A Plan
            </h1>
          </div>
          <p className="text-gray-500 text-lg font-normal w-1/2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            illum obcaecati inventore velit laborum earum.
          </p>
        </div>
        <div className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6 max-lg:items-center">
          <div className="w-1/3 max-lg:w-full px-8 py-14 flex flex-col justify-between space-y-20 items-center shadow-2xl text-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-sky-700">Basic</h3>
              <p className="text-lg">Create up to 5 forms</p>
              <p className="text-lg mt-2">Generate 100 monthly reports</p>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <p className="text-2xl">Free</p>
              <div>
                <button className="px-4 py-3 shadow-xl text-lg rounded-lg">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 max-lg:w-full px-8 text-white py-14 flex flex-col space-y-20 justify-center shadow-2xl text-center bg-gradient-to-br from-sky-700 to-cyan-400 ">
            <div className="space-y-4">
              <p className="text-lg tracking-wide text-gray-400">
                MOST POPULAR
              </p>
              <h3 className="text-3xl font-semibold">Professional</h3>
              <p className="text-lg">Create up to 20 forms</p>
              <p className="text-lg mt-2">Generate 2500 monthly reports</p>
              <p className="text-lg mt-2">Mange a team up to 5 people</p>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <p className="text-2xl">$9.95/month</p>
              <div>
                <button className="px-4 py-3 shadow-xl text-lg rounded-lg bg-white text-black">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3 max-lg:w-full px-8 py-14 flex flex-col space-y-20 justify-center shadow-2xl text-center">
            <div className="space-y-4">
              <p className="text-lg tracking-wide text-black">BEST VALUE</p>
              <h3 className="text-3xl font-semibold text-sky-700">Ulitimate</h3>
              <p className="text-lg">Create up to 20 forms</p>
              <p className="text-lg mt-2">Generate 2500 monthly reports</p>
              <p className="text-lg mt-2">Mange a team up to 5 people</p>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <p className="text-2xl">$199.95/month</p>
              <div>
                <button className="px-4 py-3 shadow-xl text-lg rounded-lg">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;

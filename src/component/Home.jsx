import React from "react";
import img1 from "../recources/undraw_svg_1.svg";
import img2 from "../recources/undraw_svg_2.svg";
import img3 from "../recources/undraw_svg_3.svg";
import img4 from "../recources/phone_2.png";
import img5 from "../recources/phone_1.png";

function Home() {
  return (
    <>
      <header className="w-screen h-screen px-44 max-2xl:px-40 max-xl:px-12 max-md:px-2 max-lg:flex-col max-lg:py-20 max-lg:space-y-12 max-lg:items-center py-28 bg-blend-lighten flex justify-between text-white">
        <div className="flex flex-col space-y-6 max-lg:text-center">
          <h1 className="text-6xl max-lg:text-4xl font-bold leading-relaxed">
            Promote Your App With <br className="max-sm:hidden" />
            SoftLand
          </h1>
          <p className="text-xl max-lg:text-lg tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div>
            <button className="py-3 px-4 border-2  hover:bg-white hover:text-sky-700 duration-150 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative mr-44 max-2xl:mr-0">
          <img
            src={img5}
            alt="mobile-img2"
            className="h-2/3 -translate-x-14 -translate-y-5"
          />
          <img
            src={img4}
            alt="mobile-img2"
            className="h-2/3 absolute top-0  shadow-2xl rounded-b-2xl"
          />
        </div>
      </header>
      <main>
        <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 max-xl:px-12 py-20 flex flex-col item-center space-y-12">
          <div className="flex text-center justify-center mt-12">
            <h1 className="text-6xl max-lg:text-5xl font-bold tracking-wide bg-gradient-to-br from-blue-500 to-cyan-400 py-3 bg-clip-text text-transparent">
              Save your time to <br /> using SoftLand
            </h1>
          </div>
          <div className="flex items-center space-x-12 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-12">
            <div className="flex w-1/3 max-lg:w-full flex-col items-center text-center space-y-5">
              <i className="fa-solid fa-user-group fa-2x bg-sky-600 w-24 h-24 rounded-full flex justify-center items-center text-white shadow-xl shadow-slate-400"></i>
              <h5 className="text-2xl font-semibold tracking-wide">
                Explore Your Team
              </h5>
              <p className="text-gray-400 text-lg tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
            <div className="flex w-1/3 max-lg:w-full flex-col items-center text-center space-y-5">
              <i className="fa-solid fa-sun fa-2x bg-sky-600 w-24 h-24 rounded-full flex justify-center items-center text-white shadow-xl shadow-slate-400"></i>
              <h5 className="text-2xl font-semibold tracking-wide">
                Digital Whiteboard
              </h5>
              <p className="text-gray-400 text-lg tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
            <div className="flex w-1/3 max-lg:w-full flex-col items-center text-center space-y-5">
              <i className="fa-solid fa-chart-simple fa-2x bg-sky-600 w-24 h-24 rounded-full flex justify-center items-center text-white shadow-xl shadow-slate-400"></i>
              <h5 className="text-2xl font-semibold tracking-wide">
                Design to Development
              </h5>
              <p className="text-gray-400 text-lg tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex flex-col item-center space-y-24">
          <div className="flex justify-center text-center">
            <img src={img1} alt="img-1" className="w-1/2" />
          </div>
          <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-12 space-x-12">
            <div className="flex flex-col p-7 w-1/3 max-lg:w-full space-y-6 shadow-xl rounded-lg">
              <h5 className="text-blue-500 tracking-wider text-lg font-semibold">
                01
              </h5>
              <h3 className="text-3xl font-medium tracking-wide">Sign Up</h3>
              <p className="text-gray-400 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
            <div className="flex flex-col p-7 w-1/3 max-lg:w-full space-y-6 shadow-xl rounded-lg">
              <h5 className="text-blue-500 tracking-wider text-lg font-semibold">
                02
              </h5>
              <h3 className="text-3xl font-medium tracking-wide">
                Create Profile
              </h3>
              <p className="text-gray-400 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
            <div className="flex flex-col p-7 w-1/3 max-lg:w-full space-y-6 shadow-xl rounded-lg">
              <h5 className="text-blue-500 tracking-wider text-lg font-semibold">
                03
              </h5>
              <h3 className="text-3xl font-medium tracking-wide">
                Enjoy the app
              </h3>
              <p className="text-gray-400 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex max-lg:flex-col justify-between items-center space-x-12">
          <div className="flex flex-col space-y-8 w-2/5 max-lg:w-full p-6">
            <h2 className="text-4xl tracking-wide font-medium">
              Seamlessly
              <br /> Communicate
            </h2>
            <p className="text-gray-400 font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              at reprehenderit optio, laudantium eius quod, eum maxime molestiae
              porro omnis. Dolores aspernatur delectus impedit incidunt dolore
              mollitia esse natus beatae.
            </p>
            <div>
              <button className="bg-gradient-to-br from-sky-800 to-cyan-500 px-6 py-3 text-white font-medium rounded-md shadow-xl">
                Download Now
              </button>
            </div>
          </div>
          <div className="w-2/5 max-lg:w-full">
            <img src={img2} alt="" />
          </div>
        </section>
        <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex max-lg:flex-col justify-between items-center space-x-12">
          <div className="w-2/5 max-lg:w-full">
            <img src={img3} alt="" />
          </div>
          <div className="flex flex-col space-y-8 w-2/5 max-lg:w-full p-6">
            <h2 className="text-4xl tracking-wide font-medium">
              Gather Feedback
            </h2>
            <p className="text-gray-400 font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              at reprehenderit optio, laudantium eius quod, eum maxime molestiae
              porro omnis. Dolores aspernatur delectus impedit incidunt dolore
              mollitia esse natus beatae.
            </p>
            <div>
              <button className="bg-gradient-to-br from-sky-800 to-cyan-500 px-6 py-3 text-white font-medium rounded-md shadow-xl">
                Download Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
  
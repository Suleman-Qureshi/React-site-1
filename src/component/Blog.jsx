import React from "react";
import { Link } from "react-router-dom";
import img1 from "../recources/img_1.jpg";
import img2 from "../recources/img_2.jpg";
import img3 from "../recources/img_3.jpg";
import img4 from "../recources/img_4.jpg";

function Blog() {
  return (
    <>
      <header className="w-screen h-screen px-44 max-2xl:px-40 max-md:px-2 py-28 bg-blend-lighten flex justify-center text-white">
        <div className="flex flex-col space-y-8 text-center mt-14">
          <h1 className="text-7xl max-lg:text-5xl font-bold">Blog Posts</h1>
          <p className="text-lg max-lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </header>
      <section className="w-screen px-44 max-2xl:px-40 max-lg:space-x-6 max-md:px-2 py-12 bg-blend-lighten flex flex-col max-lg:flex-row max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6 text-white">
        <div className="flex max-lg:flex-col space-x-8 max-lg:space-x-0 max-lg:space-y-6 justify-between my-4 ">
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img1} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img2} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img3} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
        </div>
        <div className="flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6 space-x-8 justify-between my-4">
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img4} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img3} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
          <div className="space-y-4 w-1/4 max-lg:w-full">
            <img src={img2} alt="user_img_1" />
            <div className="flex flex-col space-y-3">
              <div className="text-gray-300 flex space-x-2">
                <p>December 13,2019 . By</p>{" "}
                <p className="text-black"> Admin</p>
              </div>
              <h2 className="text-2xl text font-semibold text-black">
                Chrome now alerts you when someone steals your password
              </h2>
              <p className="text-gray-300 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                optio.
              </p>
              <Link className="text-sky-700">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;

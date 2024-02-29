import React from "react";
import img1 from "../recources/person_1.jpg";
import img2 from "../recources/person_2.jpg";
import img3 from "../recources/person_3.jpg";
import "../index.css";

function Team() {
  return (
    <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex flex-col justify-center items-center item-center space-y-12">
      <div className="flex text-center justify-center mt-12">
        <h1 className="text-6xl max-lg:text-5xl font-bold tracking-wide bg-gradient-to-br from-blue-500 to-cyan-400 py-3 bg-clip-text text-transparent">
          Review From our
          <br /> User
        </h1>
      </div>
      <div className="flex justify-center items-center place-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators py-3 bg-gradient-to-r from-sky-700 to-cyan-700 rounded-full space-x-8 translate-y-14">
            <li
              data-target="#carouselExampleIndicators "
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="flex flex-col space-y-6 d-block">
                <div className="flex space-x-2 justify-center items-center">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-gray-300"></i>
                </div>
                <div className="flex flex-col space-y-4 text-center items-center">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Excellent app
                  </h3>
                  <p className="text-gray-500 text-lg w-1/2 max-lg:w-full max-sm:w-screen max-sm:mx-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis odit cupiditate provident iste eius asperiores
                    debitis quas, dolor deserunt in earum excepturi animi
                    aliquid ducimus necessitatibus voluptas cum nostrum quam
                    est? Voluptate!
                  </p>
                  <div className="w-20 h-20">
                    <img src={img1} alt="" className="rounded-full" />
                  </div>
                  <h4 className="text-lg font-normal italic tracking-wide">
                    Jean Doe, - App User
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col space-y-6 d-block">
                <div className="flex space-x-2 justify-center items-center">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-gray-300"></i>
                </div>
                <div className="flex flex-col space-y-4 text-center items-center">
                  <h3 className="text-xl font-semibold tracking-wide">
                    This App is Easy to Use
                  </h3>
                  <p className="text-gray-500 text-lg w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis odit cupiditate provident iste eius asperiores
                    debitis quas, dolor deserunt in earum excepturi animi
                    aliquid ducimus necessitatibus voluptas cum nostrum quam
                    est? Voluptate!
                  </p>
                  <div className="w-20 h-20">
                    <img src={img2} alt="" className="rounded-full" />
                  </div>
                  <h4 className="text-lg font-normal italic tracking-wide">
                    Jhon Smith, - App User
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="flex flex-col space-y-6 d-block">
                <div className="flex space-x-2 justify-center items-center">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-gray-300"></i>
                </div>
                <div className="flex flex-col space-y-4 text-center items-center">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Awseome functionality
                  </h3>
                  <p className="text-gray-500 text-lg w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis odit cupiditate provident iste eius asperiores
                    debitis quas, dolor deserunt in earum excepturi animi
                    aliquid ducimus necessitatibus voluptas cum nostrum quam
                    est? Voluptate!
                  </p>
                  <div className="w-20 h-20">
                    <img src={img3} alt="" className="rounded-full" />
                  </div>
                  <h4 className="text-lg font-normal italic tracking-wide">
                    Jean Thunberg, - App User
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;

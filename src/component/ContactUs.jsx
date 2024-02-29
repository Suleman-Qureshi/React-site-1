import React from "react";

function ContactUs() {
  return (
    <>
      <header className="w-screen h-screen px-44 max-2xl:px-40 max-md:px-2 py-28 bg-blend-lighten flex justify-center text-white">
        <div className="flex flex-col space-y-8 text-center mt-14">
          <h1 className="text-7xl max-lg:text-5xl font-bold">Get in touch</h1>
          <p className="text-lg max-lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </header>
      <section className="w-screen px-44 max-2xl:px-40 max-md:px-2 py-12 bg-blend-lighten flex flex-col">
        <div>
          <h1 className="text-2xl font-semibold">Contact Form</h1>
          <p className="text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus
            <br /> incidunt ut officiis explicabo inventore.
          </p>
        </div>
        <div className="flex max-lg:flex-col py-6 space-x-8 justify-between">
          <form className="w-1/2 max-lg:w-full flex flex-col space-y-4">
            <div className="flex space-x-6 w-full">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="name"
                  className="text-lg font-normal text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" p-1 text-lg border-2 border-gray-400"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="email"
                  className="text-lg font-normal text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className=" p-1 text-lg border-2 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="subject"
                className="text-lg font-normal text-gray-400"
              >
                subject
              </label>
              <input
                type="text"
                name="subject"
                className=" p-1 text-lg border-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="message"
                className="text-lg font-normal text-gray-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="textarea"
                className="p-1 text-lg border-2 h-32 border-gray-400"
              ></textarea>
            </div>
            <div className="flex w-full">
              <button className="bg-gradient-to-r from-sky-600 to-cyan-400 px-12 py-3 text-white font-medium rounded-lg">
                Send message
              </button>
            </div>
          </form>
          <div className="w-1/3 max-lg:w-full flex flex-col space-y-4 py-14">
            <div className="flex flex-col space-y-2 text-gray-400 text-lg">
              <h4 className="font-semibold">Address</h4>
              <p>203 Fake st. Mountain View,California, USA</p>
            </div>
            <div className="flex flex-col space-y-2 text-gray-400 text-lg">
              <h4 className="font-semibold">Phone</h4>
              <p>+92 0000 12345</p>
            </div>
            <div className="flex flex-col space-y-2 text-gray-400 text-lg">
              <h4 className="font-semibold">Email</h4>
              <p>Info@Example.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

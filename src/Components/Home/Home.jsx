import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/goal.png";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg py-16">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Download Now and Achieve Your Goals
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-opacity-80">
              Unlock the full potential of your productivity with our app. Start
              today!
            </p>

            <Link
              className="inline-flex text-white items-center px-8 py-4 font-medium bg-amber-600 rounded-lg hover:bg-amber-500 transition duration-300"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download Now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full flex justify-center items-center sm:justify-end">
          <img
            className="w-3/4 sm:w-[50%] max-w-md rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            src={img1}
            alt="image1"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

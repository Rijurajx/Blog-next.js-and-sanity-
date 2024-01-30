import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl py-5">Ikigai</h1>
        <h2 className="mt-5 md:mt-0">
          welcome,{" "}
          <span className="underline decoration-4 decoration-[#FFB5A7]">
            to your
          </span>{" "}
          <span className="animated-typing">
            daily dose of positivity
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Daily motivation | Never give up | Keep growing | Believe in yourself
      </p>
    </div>
  );
};

export default Banner;

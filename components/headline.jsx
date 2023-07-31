import React from "react";

function Headline({ words, gradients, currIndex }) {
  return (
    <h1 className="text-6xl lg:text-7xl font-black leading-8 text-center">
      <span className="flex flex-col md:block">
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index === currIndex
                ? "bg-gradient-to-r " +
                  gradients[currIndex] +
                  " bg-clip-text text-transparent"
                : ""
            } transition-all duration-500 ease-in-out delay-5`}
          >
            {word}
          </span>
        ))}
      </span>
    </h1>
  );
}

export default Headline;

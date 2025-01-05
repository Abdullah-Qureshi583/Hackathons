import React from "react";

const PrimaryHeading = ({ children, textStart }) => {
  return (
    <h2
      className={`text-[1.6rem] md:text-[2.6rem] text-darkTextBlue font-bold ${
        textStart ? "text-start" : "text-center"
      } `}
    >
      {children}
    </h2>
  );
};

export default PrimaryHeading;

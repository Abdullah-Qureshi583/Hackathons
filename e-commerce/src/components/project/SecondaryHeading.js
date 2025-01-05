import React from "react";

const SecondaryHeading = ({ children }) => {
  return (
    <h3
      className={`text-2xl md:text-3xl lg:text-4xl text-darkTextBlue font-bold `}
    >
      {children}
    </h3>
  );
};

export default SecondaryHeading;

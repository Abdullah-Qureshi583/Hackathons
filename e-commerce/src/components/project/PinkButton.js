import React from "react";
import { Button } from "../ui/button";

const PinkButton = ({ children, wFull }) => {
  return (
    <Button
      className={` text-base bg-pPink hover:bg-pPink/80 ${
        wFull && "w-full"
      }  md:p-6 rounded-sm  md:text-lg`}
    >
      {children}
    </Button>
  );
};

export default PinkButton;

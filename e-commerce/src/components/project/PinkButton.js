import React from "react";
import { Button } from "../ui/button";

const PinkButton = ({ children }) => {
  return (
    <Button className=" text-base bg-pPink hover:bg-pPink/80  md:p-6 rounded-sm  md:text-lg">
      {children}
    </Button>
  );
};

export default PinkButton;

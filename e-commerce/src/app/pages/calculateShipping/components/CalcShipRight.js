import React from "react";
import ShoppingCartLeft from "../../shoppingCart/components/ShoppingCartLeft";
import SubTotalsCard from "../../shoppingCart/components/CalculateShippingCard";
import CalculateShippingCard from "../../shoppingCart/components/CalculateShippingCard";
import CartSubTotals from "../../shoppingCart/components/CartSubTotals";
import LeftMoreItems from "./LeftMoreItems";

const CalcShipRight = () => {
  return (
    <div className="flex flex-col gap-10">
      <LeftMoreItems />
      <CartSubTotals />
    </div>
  );
};

export default CalcShipRight;

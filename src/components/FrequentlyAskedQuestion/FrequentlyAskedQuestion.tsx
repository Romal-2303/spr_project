import React from "react";
import Accordian from "../Accordian/Accordian";
import V2_Button from "../V2_Button/V2_Button";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      <Accordian
        optionsArr={[
          {
            id: 1,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
          {
            id: 2,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
          {
            id: 3,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
        ]}
      />

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <V2_Button>Checkout</V2_Button>
        <V2_Button>Confirm</V2_Button>
        <V2_Button>Add to Wishlist</V2_Button>
        <V2_Button>Compare Prices</V2_Button>
        <V2_Button>Upgrade Now</V2_Button>
        <V2_Button>View Cart</V2_Button>
        <V2_Button>Repeat Order</V2_Button>
        <V2_Button buttonStyle="success">Apply Coupon</V2_Button>
        <V2_Button buttonStyle="success">Redeem Points</V2_Button>
        <V2_Button buttonStyle="success">Select Plan</V2_Button>
        <V2_Button buttonStyle="success">Checkout as Guest</V2_Button>
        <V2_Button buttonStyle="success">Track Shipment</V2_Button>
        <V2_Button buttonStyle="danger">Reject</V2_Button>
        <V2_Button>Start Free Trial</V2_Button>
        <V2_Button buttonStyle="warning">Enable</V2_Button>
        <V2_Button buttonStyle="warning">Disable</V2_Button>
        <V2_Button buttonStyle="outline">Upload</V2_Button>
        <V2_Button buttonStyle="warning">Refresh</V2_Button>
        <V2_Button buttonStyle="warning">Retry</V2_Button>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;

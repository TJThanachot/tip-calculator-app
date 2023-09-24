import React from "react";
import { useTip } from "../context/tipContext";

function RightBox() {
  const {
    totalBill,
    setTotalBill,
    setBill,
    setPeopleNumber,
    setTips,
    setCustomTips,
    setTipsAmount,
    setTotal,
    tipsAmount,
    total,
  } = useTip();
  return (
    <div className="w-[50%] max-sm:w-[100%] rounded-box bg-teal-900 h-[100%] justify-between flex flex-col p-8">
      <div className="text-white h-[50%] justify-between flex flex-col gap-5">
        <div className="flex justify-between ">
          <div className="flex flex-col items-start justify-center ">
            Total Tips
          </div>
          <div className="text-teal-500 text-5xl">${tipsAmount}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center">
            Total Tips<p className="text-sm text-[#c7e6e6]">/ person</p>
          </div>
          <div className="text-teal-500 text-5xl">${total}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center">
            Total Bill
            <p className="text-sm text-[#c7e6e6]">includes tips</p>
          </div>
          <div className="text-teal-500 text-5xl">${totalBill}</div>
        </div>
      </div>
      <button
        className="text-teal-900 btn text-xl font-bold"
        onClick={() => {
          setTotalBill("0.00");
          setBill(0);
          setPeopleNumber(0);
          setTips(null);
          setCustomTips(false);
          setTipsAmount("0.00");
          setTotal("0.00");
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default RightBox;

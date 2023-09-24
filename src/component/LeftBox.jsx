import React from "react";
import { useTip } from "../context/tipProvider";

function LeftBox() {
  const {
    setBill,
    setPeopleNumber,
    setTips,
    setCustomTips,
    bill,
    peopleNumber,
    customTips,
  } = useTip();
  return (
    <div className="w-[50%] rounded-box flex flex-col justify-between">
      <label
        className="flex flex-col items-start gap-2 relative"
        htmlFor="bill"
      >
        Bill
        <p className="absolute top-10 left-5 text-teal-500 texl-xl">$</p>
        <input
          id="bill"
          type="number"
          value={bill}
          className="w-full h-8 bg-[#c7e6e6] rounded-md focus:outline-none p-5 text-right"
          onChange={(e) => {
            e.target.value >= 0 && setBill(e.target.value);
          }}
        ></input>
      </label>
      <div className="flex flex-col items-start gap-2">
        Select Tips %
        <div className="grid grid-cols-3 gap-2 w-full">
          <button
            onClick={() => {
              setTips(0.05);
              setCustomTips(false);
            }}
            className="h-10 text-xl font-bold flex justify-center items-center btn bg-teal-900 text-white"
          >
            5%
          </button>
          <button
            onClick={() => {
              setTips(0.1);
              setCustomTips(false);
            }}
            className="h-10 text-xl font-bold flex justify-center items-center btn bg-teal-900 text-white"
          >
            10%
          </button>
          <button
            onClick={() => {
              setTips(0.15);
              setCustomTips(false);
            }}
            className="h-10 text-xl font-bold flex justify-center items-center btn bg-teal-900 text-white"
          >
            15%
          </button>
          <button
            onClick={() => {
              setTips(0.25);
              setCustomTips(false);
            }}
            className="h-10 text-xl font-bold flex justify-center items-center btn bg-teal-900 text-white"
          >
            25%
          </button>
          <button
            onClick={() => {
              setTips(0.5);
              setCustomTips(false);
            }}
            className="h-10 text-xl font-bold flex justify-center items-center btn bg-teal-900 text-white"
          >
            50%
          </button>
          <button
            onClick={() => {
              setCustomTips(true);
            }}
            className="h-10 p-0 text-xl font-bold flex justify-center items-center btn bg-[#c7e6e6] text-teal-500"
          >
            {customTips ? (
              <label
                className="flex flex-col items-start gap-2 relative"
                htmlFor="custom"
              >
                <input
                  onChange={(e) => {
                    const value = e.target.value / 100;
                    value >= 0 && setTips(value);
                  }}
                  id="custom"
                  type="number"
                  className="w-[100%] h-full bg-[#c7e6e6] focus:outline-none text-center"
                ></input>
                <p className="absolute top-0 right-0 text-teal-500 bg-[#c7e6e6] w-10">
                  %
                </p>
              </label>
            ) : (
              "Custom"
            )}
          </button>
        </div>
      </div>
      <div>
        <label
          className="flex flex-col items-start gap-2 relative"
          htmlFor="numberOfPeople"
        >
          Number Of People
          <p className="absolute top-10 left-5 text-teal-500">&#128100;</p>
          <input
            id="numberOfPeople"
            value={peopleNumber}
            type="number"
            className="w-full h-8 bg-[#c7e6e6] rounded-md focus:outline-none p-5 text-right"
            onChange={(e) => {
              e.target.value >= 0 && setPeopleNumber(e.target.value);
            }}
          ></input>
        </label>
      </div>
    </div>
  );
}

export default LeftBox;

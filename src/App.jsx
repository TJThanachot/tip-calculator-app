import { useEffect, useState } from "react";
import "./App.css";
import RightBox from "./component/RightBox";
import LeftBox from "./component/LeftBox";
import { useTip } from "./context/tipProvider";

function App() {
  const {
    setTipsAmount,
    setTotal,
    setTotalBill,
    setPeopleNumber,
    setBill,
    bill,
    peopleNumber,
    tips,
    tipsAmount,
  } = useTip();

  useEffect(() => {
    if (bill && peopleNumber && tips) {
      setTipsAmount(bill * tips);
      setBill(Number(bill));
      setPeopleNumber(Number(peopleNumber));
      setTotal(tipsAmount / peopleNumber);
      setTotalBill(bill + tipsAmount);
    }
  }, [bill, peopleNumber, tips, tipsAmount]);

  return (
    <div className="mt-[10%] flex flex-col items-center gap-10 h-[50rem] font-bold ">
      <h1 className="text-5xl font-extrabold text-teal-900">
        Tips Calculator App
      </h1>
      <div className="rounded-box p-8 flex w-[70%] min-h-[50%] h-auto bg-slate-100 gap-8 max-sm:flex-col max-sm:w-[100%]">
        {/* left box ******************************************************************* */}
        <LeftBox />
        {/* right box ******************************************************************* */}
        <RightBox />
      </div>
    </div>
  );
}

export default App;

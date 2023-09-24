import React from "react";
import { useEffect, useState } from "react";

const tipContext = React.createContext();

function TipProvider(props) {
  const [totalBill, setTotalBill] = useState("0.00");
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [tips, setTips] = useState(null);
  const [customTips, setCustomTips] = useState(false);
  const [tipsAmount, setTipsAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  return (
    <tipContext.Provider
      value={{
        setTotalBill,
        setBill,
        setPeopleNumber,
        setTips,
        setCustomTips,
        setTipsAmount,
        setTotal,
        totalBill,
        bill,
        peopleNumber,
        tips,
        customTips,
        tipsAmount,
        total,
      }}
    >
      {props.children}
    </tipContext.Provider>
  );
}
const useTip = () => React.useContext(tipContext);
export { TipProvider, useTip };

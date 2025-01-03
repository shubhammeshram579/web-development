import React, { useState } from "react";

// custom input
import { InputeBox } from "..//../index.js";

// custom hooks
import CurrencyConvertorHook from "./Hook/CustomHooks.js";

function CurrencyConvetP4() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvetedamount] = useState(0);

//   custom hook used for fatch currency data
  const currencyInfo = CurrencyConvertorHook(from);
  // console.log(currencyInfo);

//   get object data fro used object key
  const option = Object.keys(currencyInfo);


// swap butten funsality
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvetedamount(amount);
    setAmount(convertedAmount);
  };


//   conver currency amount button
  const convert = () => {
    setConvetedamount(amount * currencyInfo[to]);
  };

  return (
    <div className="bg-blue-700 px-5 py-10 flex items-center justify-between">
      <form
    //   form sumbit 
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="flex items-start justify-between flex-row gap-5 bg-slate-400 px-5 py-6"
      >

        <div className="card1">
            {/* used custome inpute */}
          <InputeBox
            label="From"
            amount={amount}
            currencyOptions={option}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        <button type="button" onClick={swap}>swap</button>

        <div className="card2">
            {/* used custome inpute */}
        <InputeBox
            label="To"
            amount={convertedAmount}
            currencyOptions={option}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
           amountDisable
          />

        </div>
        <button type="submit"> convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
    </div>
  );
}

export default CurrencyConvetP4;

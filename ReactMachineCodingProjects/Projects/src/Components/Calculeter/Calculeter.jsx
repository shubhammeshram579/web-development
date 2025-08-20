import React, { useState } from "react";

const Calculeter = () => {
  const [inputV, setInputV] = useState("");

  const calculatorKeys = [
    "C",
    "DEL",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const handelSeclec = (item) => {
    if (item === "C" || item === "DEL") {
      setInputV("");
    } else if (item === "=") {
      handelSubmit();
    } else {
      setInputV((values) => values + item);
    }
  };

  const handelSubmit = (e) => {
    e?.preventDefault();

    try {
      const asm = eval(inputV);
      setInputV(asm);
    } catch (error) {
      alert("invalid test");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <h1>calculater</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="mb-2 text-black"
          value={inputV}
          onChange={(e) => setInputV(e.target.value)}
        />
      </form>
      <div className="bg-gray-500 grid grid-cols-3 w-52 px-2 py-2 rounded-lg">
        {calculatorKeys.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-4">
            <button
              onClick={() => handelSeclec(item)}
              className="mt-2 bg-red-400 px-5 py-2 rounded-lg"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculeter;

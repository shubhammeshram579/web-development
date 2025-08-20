import React, { useEffect, useState } from "react";

const getNums = () => {
  let list = [];
  for (let i = 1; i <= 8; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
};

const GameBox = () => {
  const [nums, setNums] = useState(getNums());
  const [opened ,setOpened] = useState([])
  const [solvedList ,setSolvedList] = useState([])
  const [stage, setStage] = useState("init");

  const randumNums = () => {
    const copyNum = [...nums];
    return copyNum.sort(() => Math.random() - 0.5);
  };

  const handelClick = () => {
    setStage("start");
    setNums(randumNums());
    setSolvedList([]);
  };

//   console.log("num", nums);

  const handelSelect = (item, i) => {
    if(opened.length === 2)
        return
        setOpened((prev) => [...prev,i])

  };



  useEffect(() => {

    if(opened.length === 2){
        setTimeout(() => {

            const id1 = opened[0];
            const id2 = opened[1];
            if(nums[id1] === nums[id2]){
                setSolvedList((prev) => [...prev,nums[id1]])
            }

            setOpened([])

        },1000)
    }


  },[opened])

  useEffect(() => {
    if(solvedList.length === 8){
        setStage("win")
    }
  },[solvedList])

//   console.log("ipp",opened)


  const getClassName = (item,i) => {
    if(solvedList.includes(item)){
        return "remove"
    }else if(opened.includes(i)){
        return "show"
    }else{
        return "hide"
    }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Memory Game</h1>
      {stage === "init" && <button className="bg-blue-500 px-2 py-1 rounded-lg" onClick={handelClick}>Play game</button>}
      {stage === "start" && (
        <div className="grid grid-cols-4 gap-3 mt-5">
          {nums.map((item, i) => (
            <div key={i} onClick={() => handelSelect(item, i)} className={`bg-gray-600 h-10 w-10 ${getClassName(item,i)} `}>
              {item}
            </div>
          ))}
        </div>
      )}
      {stage === "win" && (
        <div>
          <h1>You won the game</h1>
          <button onClick={handelClick} className="bg-blue-500 px-2 py-2 rounded-lg">Play Again</button>
        </div>
      )}
    </div>
  );
};

export default GameBox;

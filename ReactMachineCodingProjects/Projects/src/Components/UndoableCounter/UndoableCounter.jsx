import React, { useState } from "react";

const UndoableCounter = () => {

    const [history,setHistory] = useState([0])
    const [currentIndex,setCurrentIndex] = useState(0);
    const [data,setData] = useState([])
    const [redoStack ,setRedoStack] = useState([0]);


    

    const HandelCount = (change) => {
        const newCount = history[currentIndex] + change;
        const newHitory = history.slice(0, currentIndex + 1);
        newHitory.push(newCount)

        const log = `${change > 0 ? "+" : ""} ${change} (${history[currentIndex]} -> ${newCount}))`
       

        setHistory(newHitory)
        setCurrentIndex(currentIndex + 1)
        setData((prev) => ([...prev,log]));
        setRedoStack([])
    };

    const undo  = () => {
        if(currentIndex > 0){
            const removeLog = data[data.length -1];
            setCurrentIndex(currentIndex -1)
            setData((prev) => prev.slice(0, -1));
            setRedoStack((prev) => [...prev , removeLog])
        }
    };

    const redo = () => {
        if(currentIndex < history.length - 1 && redoStack.length > 0){
            const logToRestore = redoStack[redoStack.length -1];
            setCurrentIndex(currentIndex + 1);
            setData((prev) => [...prev, logToRestore])
            setRedoStack((prev) => prev.slice(0, -1));
        }
    }


    console.log(data)


    // const Handelbtn2 = () => {
    //     setCount(count - 10)
    //     setData((values) => ([...values,`-10 (${count} -> ${count - 10 })`]))
    // }
    // const Handelbtn3 = () => {
    //     setCount(count - 100)
    //     setData((values) => ([...values,`-100 (${count} -> ${count - 100 })`]))
    // }


    // const HandelbtnP1 = () => {
    //     setCount(count  + 1)
    //     setData((values) => ([...values,`+1 (${count} -> ${count + 1})`]))
    // }
    // const HandelbtnP2 = () => {
    //     setCount(count +  10)
    //     setData((values) => ([...values,`+10 (${count} -> ${count + 10})`]))
    // }
    // const HandelbtnP3 = () => {
    //     setCount(count + 100)
    //     setData((values) => ([...values,`+100 (${count} -> ${count + 100})`]))
    // }





   

  return (
    <div className="bg-gray-700 p-10 flex items-center justify-center flex-col">
      <div>
        <h1 className="text-2xl">Undoable Counter</h1>
        <div>
          <div className="flex items-center justify-center gap-5 mt-2">
            <button onClick={undo} className="bg-gray-300 text-black px-5 py-3 rounded-xl">Undo</button>
            <button onClick={redo} className="bg-gray-300 text-black px-5 py-3 rounded-xl">redo</button>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10">
            <button onClick={() => HandelCount(-100)} className="bg-orange-300 py-3 text-black rounded-xl px-5">-100</button>
            <button onClick={() => HandelCount(-10)} className="bg-orange-300 py-3 text-black rounded-xl px-5">-10</button>
            <button onClick={() => HandelCount(-1)} className="bg-orange-300 py-3 text-black rounded-xl px-5">-1</button>
            <p className="bg-gray-500 p-5 px-10 rounded-xl">{history[currentIndex]}</p>
            <button onClick={() => HandelCount(1)} className="bg-green-700 py-3 text-white rounded-xl px-5">+1</button>
            <button onClick={() => HandelCount(10)} className="bg-green-700 py-3 text-white rounded-xl px-5">+10</button>
            <button onClick={() => HandelCount(100)} className="bg-green-700 py-3 text-white rounded-xl px-5">+100</button>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-[20%] mt-5 rounded-lg text-black">
        {[...data].map((item,index) => (
            <div key={index} className="flex items-center justify-center gap-3">
                <p>{item}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default UndoableCounter;

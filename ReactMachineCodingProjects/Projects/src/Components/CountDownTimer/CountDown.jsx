import React, { useEffect, useState } from "react";
import InputeTimer from "./InputeTimer/InputeTimer.jsx"
import ShowTimer from "./ShowTimer/ShowTimer.jsx"


const CountDown = () => {
    // butten state 
    const [isVisual , setIsVisual] = useState(false);
    const [isPused , setIsPused] = useState(false);


    // timer state
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [timerId,setTimeID] = useState(0)



    // handel Inpute Change
    const HandelChange = (e) => {
        console.log(e.target.id, e.target.value)
        const value = parseInt(e.target.value)
        const id = e.target.id
        if(id === "hour"){
            setHour(value)
        }else if(id === "minute"){
            setMinute(value)
        }else{
            setSeconds(value)
        }
    }

    

    // downTimer functionality
    const runTimer = (sec,min,hr,tid) => {
        if(sec > 0){
            setSeconds((s) => s - 1)
        }else if(sec === 0 && min > 0){
            setMinute((m) => m - 1);
            setSeconds(59)
        }else{
            setHour((h) => h - 1);
            setMinute(59)
            setSeconds(59)
        }


        // handel inpute nagative value less 0
        if(sec === 0 && min === 0 && hr === 0){
            HandelReset()
            alert("timer is finist")
            clearInterval(tid)
            return;
        }
    }


    // reset inpute
    const resetTimer = () => {
        setHour(0)
        setMinute(0)
        setSeconds(0)
        clearInterval(timerId)

    }

    
    // setIntervel functionality
    useEffect(() => {
        let tid;
        if(isVisual){
            tid = setInterval(() => {

                runTimer(seconds,minute,hour,tid)
            },1000)
            setTimeID(tid)
        }


        // unmound
        return () => {
            clearInterval(tid)
        }
        

    },[isVisual,hour,minute,seconds])




    // handelStartBtn
    const HandelStart = () => {
        if(hour < 0 || minute < 0 || seconds <= 0){
            alert("invalid inpute");
            return;
        } else{
            setIsVisual(true)
        }
        
    }


    // handelResetBtn
    const HandelReset = () => {
        setIsVisual(false)
        resetTimer()
    }


    // handelPusedbtn
    const HandelPused = () => {
        setIsPused(true)
        clearInterval(timerId)
    }


    // handelResumebtn
    const HandelResume = () => {
        setIsPused(false)
        runTimer(seconds,minute,hour)
    }


  return (
    <div className="bg-slate-700 ">
      <h1 className="text-2xl pb-5">CountDown timer</h1>
      {/* component1 */}
      {!isVisual && <InputeTimer HandelChange={HandelChange} HandelStart={HandelStart} />}

      {/* component1 2 */}
      {isVisual && <ShowTimer HandelPused={HandelPused} HandelResume={HandelResume} HandelReset={HandelReset} isPused={isPused} hour={hour} minute={minute} seconds={seconds} />}
    </div>
  );
};

export default CountDown;

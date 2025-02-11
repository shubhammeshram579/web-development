import React ,{useState} from "react";

const Counter = () => {
    // state managment
    const [count ,setCount] = useState(0);


    // + increse btn
    const handelBtnI =()  => {
        if(count >= 20){
            return 20;
        }
        setCount(count + 1);
    }

    // - decrese btn
    const handelBtnD = () => {
        if(count <= 0){
            return 0;
        }
        setCount(count - 1)
    }



    // css styling 
    const styles = {
        backgroundColor:"green"
        ,padding:"50px",
        width:"10%"
    }

    return (
        <>
        <div style={styles}>
        <h1>counter {count}</h1>
        <button onClick={handelBtnI}>increse</button>
        <button onClick={handelBtnD}>drecrse</button>
        </div>
        </>
    )
}

export default Counter;
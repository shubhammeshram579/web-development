import React, { useCallback, useEffect, useRef, useState } from "react";

function Project3PasswordGen() {

// useState hooks
// What it does:
// Manages state (data that changes) in functional components.
// When to use:
// When you want to keep track of things like form inputs, counters, or toggles.
// How it works:
// It provides a variable (state) and a function to update it.

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useref
  const passwordRefEmlemt = useRef(null);

  // console.log(passwordRefEmlemt);


  // hooks useCallback:
  // What is it used for?
    // Used to memorize a function so that it doesn’t get recreated on every render.
    // It’s about optimizing performance when passing functions as props or dependencies.

    // 2. When does it run?
    // Doesn’t run anything; it just remembers (caches) the function.
    // It re-creates the function only if its dependencies change.

  const passwordGenrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()-_+=}{[]:;<>,.?/|~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  // copy password funclity
  const copypassword = useCallback(() => {
    passwordRefEmlemt.current?.select();
    passwordRefEmlemt.current.setSelectionRange(1, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);


// useEffect hook:
// What is it used for?
// Used to run side effects in your component after it renders (e.g., fetching data, updating the DOM, setting up timers).
// It’s about reacting to changes in the component or external state.

// When does it run?
// Runs after the render phase and re-runs when its dependencies change.

  useEffect(() => {
    passwordGenrater();
  }, [length, numberAllow, charAllow, passwordGenrater]);

  return (
    <div className="min-h-[100vh] w-full flex items-center justify-center flex-col gap-7">
      <div className="bg-slate-500 w-[25vw] h-[20vh] flex items-center justify-center flex-col">
        <h1>PassWord Genrater</h1>

        <div className="flex items-center justify-between gap-4">
          <input
            className="w-[18vw] h-10"
            type="text"
            value={password}
            readOnly
            ref={passwordRefEmlemt}
            placeholder="password"
          />
          <button
            className="bg-orange-300 px-5 py-3 rounded-2xl"
            onClick={copypassword}
          >
            copy
          </button>
        </div>

        <div className="card2 flex items-center justify-between gap-10 pt-5">
          <div className="rageCard">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Range: {length}</label>
          </div>

          <div className="checkbox1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllow}
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">number</label>
          </div>
          <div className="checkbox2">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => {
                  !prev;
                });
              }}
            />
            <label htmlFor="characterInput">character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3PasswordGen;



// Quick Summary Sentence:
// Use useState to manage data that changes.
// Use useEffect to handle things that happen after rendering.
// Use useCallback to save functions and avoid unnecessary re-creation.
// Use useRef to access DOM elements or store values without triggering re-renders.

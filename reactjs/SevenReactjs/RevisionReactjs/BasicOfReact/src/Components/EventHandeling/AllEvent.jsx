import React from "react"
import BgColor from "./EventHandel/BgColor.jsx"
import Counter from "./EventHandel/Counter.jsx"
import ControllComoSTD from "./EventHandel/ControllComoSTD.jsx"
import UseForm from "./EventHandel/UseForm.jsx"
import UseRefForm from "./EventHandel/UseRefForm.jsx"

const AllEvent = () => {
    return (
        <>
        <div>
            <BgColor />
            <Counter />
            <ControllComoSTD />
            <UseForm />
            <UseRefForm />
        </div>
        </>

    )
}

export default AllEvent
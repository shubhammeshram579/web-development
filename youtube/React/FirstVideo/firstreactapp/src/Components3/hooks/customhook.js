import React, { useEffect, useState } from 'react'

const Usedebouncesearch = (value,delay=400) => {

    const [debounceValue, setDebounceValue] = useState(value)


    useEffect(() => {

       const debouId =  setTimeout(() => {
            setDebounceValue(value)
            
        }, delay);


        return () => {
            clearTimeout(debouId)
        }

    },[value,delay])


    return debounceValue;


}

export default Usedebouncesearch

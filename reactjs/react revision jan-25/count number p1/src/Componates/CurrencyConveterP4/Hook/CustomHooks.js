import React , {useEffect,useState} from 'react'

// custum hook create
function CustomHooks(currency) {

    const [data , setData] = useState({});

    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )
        console.log(currency);
    }, [currency])

    return data;
 
}

export default CustomHooks
import React, { useEffect, useState } from 'react'
import Propsfirstway from "./Props/Propsfirstway.jsx"
import PropsSecondWay from "./Props/PropsSecondWay.jsx"
import PropsThirdWay from "./Props/PropsThirdWay.jsx"
import PropsForthWay from "./Props/PropsForthWay.jsx"
import PropsFithWay from "./Props/PropsFithWay.jsx"
import PropsSixWayApi from "./Props/PropsSixWayApi.jsx"
import axios from 'axios'

const AllProps = () => {
    // second way props
    const obj = {
        name: "labham",
        age:21
    }


    // third way props
    const std = [
        {
          name: "pallavi",
          std: "12th",
        },
        {
          name: "aachal",
          std: "10th",
        },
      ];

    //   forth way props
    let mouse = "dell"
    let laptop = "hp"
    let proccers = "intel i5"



    // six way to props Apidata 

    const [apiData,setApiData] = useState([]);
    
    useEffect(() => {
        const FatchData = async () => {
            try {
                
                const resposne = await axios.get("https://dummyjson.com/products/1")
                setApiData(resposne.data)

            } catch (error) {
                console.log(error || "somting api data error")
                
            }

        }

        FatchData()

    },[])




  return (
    <div>
      <Propsfirstway name="shubham" age={38}/>
      <PropsSecondWay data={obj} />
      <PropsThirdWay  data={std}/>
      <PropsForthWay mouse={mouse} laptop={laptop} proccers={proccers}  />
      <PropsFithWay data={{mouse,laptop,proccers}} num={29642647}/>
      <PropsSixWayApi data={apiData} />
    </div>
  )
}

export default AllProps

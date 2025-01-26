import React from 'react'
import PropsFirst from "./AllTypesProps/PropsFirst.jsx"
import PropsSecond from "./AllTypesProps/PropsSecond.jsx"
import PropsThird from "./AllTypesProps/PropsThird.jsx"
import PropsFour from "./AllTypesProps/PropsFour.jsx"
import PropsFith from "./AllTypesProps/PropsFith.jsx"

import PropsSixApi from "./AllTypesProps/PropsSixApi.jsx"

const AllProps = () => {
    // secondWay props
    let obj = {
        firstname:"labham",
        lastname:"meshram"
    }


    let array = [
        {
            name:"shubham",
            age:27
        },
        {
            name:"labham",
            age:20
        },
        {
            name:"aachal",
            age:23
        },
        {
            name:"pallavi",
            age:22
        }
    ];


    // fithway to props data

    let bottel = "mr diy";
    let mouse = "zebronic";
    let keabord = "dell";

  return (
    <div>
      <PropsFirst name="shubham" age={27}/>

      <PropsSecond user={obj} />
      <PropsThird />

      <PropsFour  obj={array}/>

      <PropsFith  data={{bottel,mouse,keabord}} num={12} />

      <PropsSixApi /> 
    </div>
  )
}

export default AllProps

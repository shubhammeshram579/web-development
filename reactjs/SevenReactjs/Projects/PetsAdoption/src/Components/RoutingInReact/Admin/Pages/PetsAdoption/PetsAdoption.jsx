import React from 'react'
import AdoptionLikelihood from "./Charts/AdoptionLikelihood.jsx"
import PetsTypeDis from "./Charts/PetsTypeDis.jsx"
import DistributionBreed from "./Charts/DistributionBreed.jsx"
import DisbutionColor from "./Charts/DisbutionColor.jsx"
import DistributionPetSize from "./Charts/DistributionPetSize.jsx"
import MultiChartPetsType from "./Charts/MultiChartPetsType.jsx"
import PetsVacanationStatus from "./Charts/PetsVacanationStatus.jsx"
import HeathCondition from "./Charts/HeathCondition.jsx"
import AdoptionPreviseOwner from "./Charts/AdoptionPreviseOwner.jsx"
import TimeInShelterDays from "./Charts/TimeInShelterDays.jsx"

// import MultiplePieCharts from "./Charts/Demo.jsx"

const PetsAdoption = () => {
  return (
    <div style={{paddingTop:"200px",width:"80%",marginLeft:"15%",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <AdoptionLikelihood />
        <MultiChartPetsType />
        {/* <PetsTypeDis /> */}
        <DistributionBreed />
        <DisbutionColor />
        <DistributionPetSize />
        <PetsVacanationStatus />
        <HeathCondition />
        <AdoptionPreviseOwner />
        <TimeInShelterDays />

        {/* <MultiplePieCharts /> */}
        
    </div>
  )
}

export default PetsAdoption

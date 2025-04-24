import React ,{useContext, useEffect, useState} from 'react'
import ShalterFess from "./ShalterFess.jsx"
import Performace from "./Performace.jsx"
import { Link } from 'react-router-dom'
import UserContext from "..//..//../ContexApi/UsedContexApi.js"

const HomeDashboard = () => {
    const {products2,ShelterList} = useContext(UserContext)
    // console.log(ShelterList)

    const [totalPet ,setTotalPet] = useState({})
    const [totalpetstype ,setTotalpetstype] = useState({})
    const [sheleterMode ,setSheleterMode] = useState({})

    


    useEffect(() => {
        const fatcData = () => {
            let avabPet = products2.length - ShelterList.length;

            let totalFess = 0
            ShelterList.forEach((item) => {
                totalFess += item.price
            })

            let CatData = products2.filter((item) => (item.type === "Cat"))
            let DogData = products2.filter((item) => (item.type === "Dog"))

            let offline = ShelterList.filter((item) => (item.sheltermode === "offline"))
            let online = ShelterList.filter((item) => (item.sheltermode === "online"))

            setSheleterMode({offlineMode:offline.length,onlineMode:online.length})
            setTotalpetstype({cats:CatData.length, dogs:DogData.length})

            setTotalPet({totalPets:products2.length , totalShelter:ShelterList.length,avabPet:avabPet,totalFess:totalFess})

        }

        fatcData()

    },[])








  return (
    <>
    <div style={{backgroundColor:"#ddd"}}>
    <div style={{width:"80%", minHeight:"100vh",marginLeft:"15%", paddingTop:"100px" ,padding:"100px 50px" ,backgroundColor:"#ddd"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
        <h1 style={{color:"#111"}}>My Dashboard</h1>
        <p  style={{color:"#111"}}>Recent Shelter tangection activit and all</p>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,gap:"10px"}}>
            <p  style={{color:"#111"}}>27-feb-25</p>
            <p style={{color:"#111"}}>filter</p>
        </div>
      </div>

      <div style={{marginTop:"50px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"#fff" ,width:"190px",color:"#111",borderRadius:"10px"}}>
            <p style={{textAlign:"center",fontSize:"25px"}}>Total pets</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,gap:"10px"}}>
                <img height={50} width={50} style={{borderRadius:"100px"}} src="https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg" alt="" />
                <h3 style={{paddingLeft:"10px"}}>{totalPet.totalPets}</h3>
            </div>
        </div>
        <div style={{backgroundColor:"#fff" ,width:"190px",color:"#111",borderRadius:"10px"}}>
            <p style={{textAlign:"center",fontSize:"25px"}}>Shelter Pets</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,gap:"10px"}}>
                <img height={50} width={50} style={{borderRadius:"100px"}} src="https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg" alt="" />
                <h3 style={{paddingLeft:"10px"}}>{totalPet.totalShelter}</h3>
            </div>
        </div>
        <div style={{backgroundColor:"#fff" ,width:"190px",color:"#111",borderRadius:"10px"}}>
            <p style={{textAlign:"center",fontSize:"25px"}}>availble pets</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,gap:"10px"}}>
                <img height={50} width={50} style={{borderRadius:"100px"}} src="https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg" alt="" />
                <h3 style={{paddingLeft:"10px"}}>{totalPet.avabPet}</h3>
            </div>
        </div>
        <div style={{backgroundColor:"#fff" ,width:"190px",color:"#111",borderRadius:"10px"}}>
            <p style={{textAlign:"center",fontSize:"25px"}}>pets shelter fee</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,gap:"10px"}}>
                <img height={50} width={50} style={{borderRadius:"100px"}} src="https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg" alt="" />
                <h3 style={{paddingLeft:"10px"}}>{totalPet.totalFess}</h3>
            </div>
        </div>
        <div style={{backgroundColor:"#fff" ,width:"190px",color:"#111",borderRadius:"10px"}}>
            <p style={{textAlign:"center",fontSize:"25px"}}>Total users</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,gap:"10px"}}>
                <img height={50} width={50} style={{borderRadius:"100px"}} src="https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg" alt="" />
                <h3 style={{paddingLeft:"10px"}}>120</h3>
            </div>
        </div>
      </div>


      <div>
        <div style={{paddingTop:"50px" ,display:"flex", alignItems:"start", justifyContent:"space-between"}}>
            <ShalterFess ShelterList={ShelterList} />
            <Performace />

            <div style={{backgroundColor:"#fff" ,height:"300px",width:"340px" ,borderRadius:"10px",color:"#111"}}>
                <div style={{padding:"0px 20px"}}>
                <h5>more </h5>
                <p>Pets adoption management status</p>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly" ,gap:"10px",borderRadius:"10px",paddingTop:"50px"}}>
                    <div style={{backgroundColor:"#ddd" ,borderRadius:"10px",padding:"5px"}}>
                        <h1 style={{textAlign:"center", color:"rebeccapurple"}}>49</h1>
                        <p style={{color:"#111"}}>Adop request</p>
                    </div>
                    <div style={{backgroundColor:"#ddd",borderRadius:"10px",padding:"5px"}}>
                        <h1 style={{textAlign:"center", color:"rebeccapurple"}}>25</h1>
                        <p style={{color:"#111"}}>Req Approw</p>
                    </div>
                    <div style={{backgroundColor:"#ddd",borderRadius:"10px",padding:"5px"}}>
                        <h1 style={{textAlign:"center", color:"rebeccapurple"}}>24</h1>
                        <p style={{color:"#111"}}>Req Pending</p>
                    </div>
                </div>

            </div>
        </div>
        <div style={{display:"flex" ,alignItems:"end" ,justifyContent:"space-between" ,gap:"20px"}}>
            <div style={{height:"200px", backgroundColor:"#fff", color:"#111" ,width:"300px",marginTop:"20px" ,borderRadius:"10px"}}>
                <h4 style={{paddingLeft:"10px"}}>Create Pets</h4>
                <Link style={{textDecoration:"none" ,color:"#111"}} to="/CreatePets"><div style={{ borderRadius:"10px" ,width:"200px",height:"150px", marginLeft:"30px",display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", border:"1px solid rebeccapurple"}}>
                <i  style={{fontSize:"3vw", color:"rebeccapurple"}} class="fa-solid fa-plus"></i>
                <p>create new pets</p>
                </div></Link>
            </div>
            <div style={{height:"200px", backgroundColor:"#fff", color:"#111" ,width:"300px",marginTop:"20px" ,borderRadius:"10px"}}>
                <h4 style={{paddingLeft:"10px"}}>Total Pets</h4>
                <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>
                    <div>
                        <h1>{totalpetstype.cats}</h1>
                        <p>Cats</p>
                    </div>
                    <div>
                        <h1>{totalpetstype.dogs}</h1>
                        <p>Dog</p>
                    </div>
                    
                </div>
                <p style={{textAlign:"center"}}>view more <i class="fa-solid fa-chevron-down"></i></p>
            </div>
            <div style={{height:"200px", backgroundColor:"#fff", color:"#111" ,width:"300px",marginTop:"20px" ,borderRadius:"10px"}}>
                <h4 style={{paddingLeft:"10px"}}>Total Shelter</h4>
                <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>
                    <div>
                        <h1>{sheleterMode.onlineMode}</h1>
                        <p>Online</p>
                    </div>
                    <div>
                        <h1>{sheleterMode.offlineMode}</h1>
                        <p>Offline</p>
                    </div>
                    
                </div>
                <p style={{textAlign:"center"}}>view more <i class="fa-solid fa-chevron-down"></i></p>
            </div>


            <div style={{height:"300px", backgroundColor:"#fff", color:"#111" ,width:"340px",marginTop:"-60px" ,borderRadius:"10px"}}>
                <h4 style={{paddingLeft:"10px"}}>Recent Shalter</h4>
                <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly",flexDirection:"column",gap:"10px"}}>
                   <div style={{display:"flex" ,alignItems:"start" ,justifyContent:"space-between" ,gap:"12px" ,backgroundColor:"#ddd", padding:"2px 15px"}}>
                    <img height={50} width={50} style={{objectFit:"cover"}} src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Shubham Mehsram</p>
                    <div>
                        <p>26-feb-25</p>
                        <p  style={{color:"orange"}}>incomplite</p>
                    </div>
                   </div>
                   <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-between" ,gap:"12px",backgroundColor:"#ddd", padding:"2px 15px"}}>
                    <img height={50} width={50} style={{objectFit:"cover"}} src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p>Labham Mehsram</p>
                    <div>
                        <p>26-feb-25</p>
                        <p style={{color:"green"}}>complited</p>
                    </div>
                   </div>
                </div>
                <p style={{textAlign:"center", paddingTop:"20px"}}>view more <i class="fa-solid fa-chevron-down"></i></p>
            </div>


        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default HomeDashboard

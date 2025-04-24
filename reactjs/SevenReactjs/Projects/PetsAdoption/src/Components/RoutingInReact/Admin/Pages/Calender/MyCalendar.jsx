import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
    <div style={{marginTop:"-140px",width:"390px",display:"flex", alignItems:"center", justifyContent:"center" ,flexDirection:"column" ,backgroundColor:"#dddd",borderRadius:"5px" ,paddingBottom:"20px"}}>
    <div>
        <img height={150} width={350} style={{objectFit:"cover",marginTop:"5px" ,borderRadius:"10px"}} src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
    <div className="p-4 max-w-md mx-auto">
    <p className="mt-2 text-center text-dark">Selected date: {date.toDateString()}</p>
      <Calendar onChange={setDate} value={date} />
      
    </div>
    <div style={{height:"300px", backgroundColor:"#fff", color:"#111" ,width:"340px",marginTop:"5px" ,borderRadius:"10px"}}>
                <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly",flexDirection:"column",gap:"10px"}}>
                   <div style={{display:"flex" ,alignItems:"start" ,justifyContent:"space-between" ,gap:"12px" ,backgroundColor:"#ddd", padding:"2px 15px",marginTop:"20px"}}>
                    <img height={50} width={50} style={{objectFit:"cover", borderRadius:"100px"}} src="https://petsfarm.net.in/wp-content/uploads/2024/06/labrador-retriever-puppy-in-india-1-1.webp" alt="" />
                    <p>Golden Retriever</p>
                    <div>
                        <p>26-feb-25</p>
                        <p  style={{color:"orange"}}>new pets</p>
                    </div>
                   </div>
                   <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-between" ,gap:"12px",backgroundColor:"#ddd", padding:"2px 15px"}}>
                    <img height={50} width={50} style={{objectFit:"cover" ,borderRadius:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTafb5dMziY0Fx8Tjx_DZz_zlNZzVl4sgVIw&s" alt="" />
                    <p>Labrador Retriever</p>
                    <div>
                        <p>26-feb-25</p>
                        <p style={{color:"green"}}>new pets</p>
                    </div>
                   </div>
                </div>
                <p style={{textAlign:"center", paddingTop:"20px"}}>view more <i class="fa-solid fa-chevron-down"></i></p>
            </div>
    </div>
    </>
  );
};

export default MyCalendar;

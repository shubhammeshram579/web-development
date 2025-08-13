import { color } from 'chart.js/helpers';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const Users = () => {
    const [usersData ,setUserData] = useState([])
    const [search,setSearch] = useState("")
    const [isShow ,setIsShow] = useState(false)

    let userslist = [
        {
            name:"shubham meshram",
            contract:238752897,
            email:"shubham321@gmail.com",
            status:"active",
            login:"login",
            img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Labham meshram",
            contract:238752897,
            email:"labham124@gmail.com",
            status:"active",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Rohan sharma",
            contract:238752897,
            email:"rohan321@gmail.com",
            status:"active",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Rahul shah",
            contract:2387528973,
            email:"rahul321@gmail.com",
            status:"active",
            login:"login",
            img:"https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Tanmay verma",
            contract:238752897,
            email:"Varma532@gmail.com",
            status:"Inactive",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"red"

        },
        {
            name:"shubham meshram",
            contract:238752897,
            email:"shubham321@gmail.com",
            status:"active",
            login:"login",
            img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Labham meshram",
            contract:238752897,
            email:"labham124@gmail.com",
            status:"active",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Rohan sharma",
            contract:238752897,
            email:"rohan321@gmail.com",
            status:"active",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Rahul shah",
            contract:2387528973,
            email:"rahul321@gmail.com",
            status:"active",
            login:"login",
            img:"https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"green"

        },
        {
            name:"Tanmay verma",
            contract:238752897,
            email:"Varma532@gmail.com",
            status:"Inactive",
            login:"login",
            img:"https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color:"red"

        },
    ];

    


    useEffect(() => {
        const fatchData = async () => {

            try {
                await setUserData(userslist)
                
            } catch (error) {
                console.log(error || "somting error")
            }

        }
        fatchData();
    } ,[])





    // search users
    const HanselSerch = () => {
            const regex = new RegExp(search , "i");
            const response = usersData.filter((item) => {
                const matchQuery = regex.test(item.name)
                return matchQuery 
            })
            setUserData(response)
            setIsShow(true)
    }

    // clear filter
    const HandeleClearF = () => {
        setSearch("")
        setIsShow(false)
        setUserData(userslist)
    }

  return (
    <div style={{paddingTop:"100px",minHeight:"100vh" ,width:"85%", marginLeft:"15%"}}>
      <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",paddingRight:"40px", paddingLeft:"20px"}}>
        <div>
            <h2>Users</h2>
        </div>
        <div>
            <h5>Total Users : 120</h5>
            <h5>Current Users : 50</h5>
        </div>
      </div>
      <div style={{display:"flex" ,alignItems:"center",justifyContent:"center",paddingRight:"40px",paddingTop:"50px"}}>
        <input style={{width:"50%",height:"50px",border:"1px solid gray" ,borderRadius:"10px 0px 0px 10px"}} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search users' />
        {isShow ? (<button onClick={HandeleClearF} style={{padding:"13px 30px",border:"none",borderRadius:"0px 10px 10px 0px"}} className='bg-info'>Clear Filter</button> ) :
        (<button onClick={HanselSerch} style={{padding:"13px 30px",border:"none",borderRadius:"0px 10px 10px 0px"}} className='bg-info'>Search</button>)}
      </div>

      <div style={{marginTop:"50px"}}>
        <table style={{width:"100%",backgroundColor:"#fff" ,color:"#111"}} >
            <tr style={{backgroundColor:"#dddd"}}>
                <th style={{padding:"24px 20px"}}>Photo</th>
                <th>Name</th>
                <th>Contract No</th>
                <th>Email</th>
                <th>Status</th>
                <th>Opration</th>
                <th>Action</th>
            </tr>
            {usersData.map((items,index) =>(
             
            <tbody key={index}>
                <tr>
                    <td style={{padding:"0px 20px"}}><img style={{objectFit:"cover", borderRadius:"100px"}} height={50} width={50} src={items.img} alt="" /></td>
                    <td>{items.name}</td>
                    <td>{items.contract}</td>
                    <td>{items.email}</td>
                    <td style={{color:items.color}}>{items.status}</td>
                    <td><div style={{display:"flex" ,gap:"10px",alignItems:"center" ,paddingTop:"14px"}}><p>Edit</p> <p>Delete</p></div></td>
                    <td style={{color:"green"}}>{items.login}</td>
                </tr>
            </tbody>
            ))}
        </table>
      </div>
    </div>
  )
}

export default Users

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const NewMessage = ({ setShowMassage, setSendMessage ,chatboxpage ,setChatboxpage }) => {
  const { register, handleSubmit, reset } = useForm();
  const [getAllUser, setGetAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  console.log("selectedUser",selectedUser)
  console.log("message",message)


  // const query = useQuery().get("query");

  // current user
  const accessToken = useSelector((state) => state.auth.user?.accessToken);
  const currentUser = useSelector((state) => state.auth.user?.user);

  // console.log(currentUser)

  const onSubmit = async (data) => {
    const query = data.query.trim();
    if (query) {
      try {
        const getUsers = await axios.get(
          `http://localhost:8000/api/users/getAllUsers/search`,
          {
            params: { query },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(getUsers.data.data.getUsers)
        setGetAllUsers(getUsers.data.data.getUsers);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    // setGetAllUsers([]);
    // reset(); // Clear the search input
  };


  const handleSendMessage = async () => {
    if (selectedUser && message.trim()) {
      try {
          await axios.post(`http://localhost:8000/api/chatMessage/send`, {
          from: currentUser._id,
          to: selectedUser._id,
          message: message.trim(),

        },{ headers:{
          "Authorization":`Bearer ${accessToken}`,
        }});
        localStorage.setItem("toUser",selectedUser._id)
        // console.log(`Message sent to ${selectedUser.username}`);
        setMessage("");
      } catch (error) {
        console.log('Error sending message', error);
      }
    }
  };

  // getAlluser Router

  // useEffect(()=>{
  //   const fatchUsers = async () => {
  //     if(query){
  //     try {
  //       const getUsers = await axios.get(`http://localhost:8000/api/users/getAllUsers/search`,{
  //         params: { query },
  //         headers:{
  //           "Authorization": `Bearer ${accessToken}`
  //         }
  //       })
  //       console.log("getAllUser",getUsers.data)
  //       setGetAllUsers(getUsers.data)

  //     } catch (error) {
  //       console.log(error.message)

  //     }
  //   }

  //   };
  //   fatchUsers()

  // },[query])

  // useEffect(() => {
  //   if (query) {
  //     axios
  //       .get(`http://localhost:8000/api/users/getAllUsers/search`, {
  //         params: { query },
  //         headers:{
  //           "Authorization":`Bearer ${accessToken}`
  //         }
  //       })
  //       .then((response) => {
  //         console.log(response.data.data.getUsers)
  //         setGetAllUsers(response.data.data.getUsers);
  //       })
  //       .catch((error) => {
  //         console.log('Error fetching search results:', error);
  //       });
  //   }
  // }, [query]);

  const canclebtn = () => {
    setSendMessage(false);
    setShowMassage(true);
  };

  const chatboxfun = () =>{
    setChatboxpage(!chatboxpage)
    setSendMessage(false);
  }

  return (
    <div className="w-[22vw] h-[85vh] bg-gray-200 rounded-xl fixed z-50">
      <div className="flex items-center justify-between p-4 font-semibold text-2xl">
        <h1>New Messages</h1>
        <button onClick={canclebtn}>
          <h1 className="text-xl">cancel</h1>
        </button>
      </div>


      <div className="flex items-start justify-between gap-[45vh] flex-col px-5">
        <div className="mt-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <p className="flex items-center justify-center"> */}
              <i class="fa-solid fa-magnifying-glass bg-green-300 h-12 pt-4 pl-3 rounded-s-lg"></i>
              <input
                type="text"
                placeholder="search user"
                className="w-[18vw] h-12 rounded-e-lg bg-green-300"
                {...register("query")}
              />
              <button type="submit" className="hidden"></button>
              {/* </p> */}
            </form>
          </div>


        <div className="mt-2">
        {getAllUser.length > 0 && (
          <ul>
            {getAllUser.map((user) => (
              <li
                key={user._id}
                onClick={() => handleUserSelect(user)}
                style={{
                  backgroundColor: selectedUser && selectedUser.id === user.id ? 'yellow' : 'transparent',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <Link to={`/otherUser/${user._id}`}><h1>hello</h1></Link>
                {user.username} - {user.fullname} {user._id}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>


        {/* sendMaggege */}
        {selectedUser && (
        <div className="flex items-center justify-center gap-5 mt-[-50px]">
          <i class="ri-tools-fill text-2xl"></i>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={`Send message to ${selectedUser.username}`}
              className="w-[15vw] h-16 rounded-full bg-green-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          <Link to={`/otherUser/${selectedUser._id}`}><button onClick={chatboxfun}><i class="ri-send-plane-2-fill text-xl bg-red-600 p-4 rounded-full ml-[-35px]" onClick={handleSendMessage}></i></button></Link>
          </form>
        </div>
         )}
      </div>
    
    </div>
  );
};

export default NewMessage;

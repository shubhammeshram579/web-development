
import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {
 

  return (
   <UserContextProvider>
   <h1 className="bg-red-800 text-yellow-400 py-5 text-center">shubham</h1>
   <Login />
   <Profile />
   </UserContextProvider>
  )
}

export default App

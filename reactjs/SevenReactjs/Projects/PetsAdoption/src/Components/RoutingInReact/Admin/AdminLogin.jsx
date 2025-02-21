import React, { useState ,useContext} from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link ,useNavigate} from "react-router-dom";
import UserLogut from "../User/UserLogut.jsx"
import {useDispatch} from "react-redux"
import { Adminlogin as authAdminlogin } from "..//..//..//../src/ReduxStrore/AuthSlic.js";


const AdminLogin = () => {

  const dispatch = useDispatch();

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/api/v1/users/login", formData);
  //     alert(response.data.message);
  //     navigate("/")

  //     localStorage.setItem("token", response.data.token);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Login failed. Please try again.");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({email,password})
    dispatch(authAdminlogin({email,password}))
    alert(`Admin login successfully`)
    navigate("/AdminPage")
  }

  // console.log(user)

  return (
    <div style={{paddingTop:"200px" ,minHeight:"100vh"}} className="container">
      <h1 className="text-center mb-4">Admin Login <span><UserLogut/></span></h1>
      <form onSubmit={handleSubmit}  className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-info w-100">
          Login
        </button>
        <h5 className="pt-5 text-center">back to the user login <span><Link className="text-info" to="/Login">Login</Link></span></h5>
      </form>
      
    </div>
  );
};

export default AdminLogin;


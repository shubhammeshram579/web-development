import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { login as authLogin } from "../../store/AuthSlice.js";

function LoginFns() {
  // const [email , setEmail] = useState("")
  // const [password , setPassword] = useState("")
  // const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // api data fatch pending
  const onSubmit = async (data) => {
    try {
      const session = await axios.post(
        "http://localhost:8000/api/users/login",
        data
      );

      // console.log(session.data.data.accessToken)

      // localStorage token set
      localStorage.setItem("token", session.data.data.accessToken);

      // reduct tookit token set
      dispatch(authLogin(session.data.data));

      // sessionStorage token set
      sessionStorage.setItem("token", session.data.data.accessToken);

      // navigate page
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="py-[75px]">
      <div className="bg-slate-200 py-10 px-20 rounded-3xl">
        <div className="text-center">
          <Logo />
        </div>
        <h3 className="text-center">Sign in to your account</h3>
        <p className="text-center mb-5">
          Don&apos;t have any account?&nbsp;<Link to="/Signup">Sign Up</Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="Email:"
              placeholder="Enter email address"
              type="email"
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="password"
              type="password"
              placeholder="esnter password"
              {...register("password", {
                required: "password required",
              })}
            />

            <Button type="submit" className="w-full mt-5">
              Sign In{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFns;

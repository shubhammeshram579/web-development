import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setApiError("");

    try {
      // 🔐 simulate API call
      await new Promise((res) => setTimeout(res, 800));

      login({
        name: "Shubham",
        email: data.email,
      });

      navigate("/home");
    } catch (error) {
      setApiError("Invalid email or password");
    }
  };

  return (
    <div>
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-1">
        Welcome back 👋
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Login to continue
      </p>

      {/* API Error */}
      {apiError && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
          {apiError}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
              ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
            `}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2
                ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
              `}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white font-medium transition
            ${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <Link to="/register" className="text-blue-600 ml-1 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
  const { login } = useAuth(); // optional: auto-login after register
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // 🔐 simulate register API
      await new Promise((res) => setTimeout(res, 800));

      // optional auto-login after register
      login({
        name: data.name,
        email: data.email,
      });

      navigate("/home");
    } catch (error) {
      console.error("Register failed");
    }
  };

  return (
    <div>
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-1">
        Create your account ✨
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Sign up to get started
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full name
          </label>
          <input
            type="text"
            placeholder="Shubham Meshram"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
              ${errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
            `}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

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
          <input
            type="password"
            placeholder="••••••••"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
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
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
              ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}
            `}
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value, formValues) =>
                value === formValues.password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white font-medium transition
            ${isSubmitting ? "bg-green-400" : "bg-green-600 hover:bg-green-700"}
          `}
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <Link to="/login" className="text-blue-600 ml-1 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

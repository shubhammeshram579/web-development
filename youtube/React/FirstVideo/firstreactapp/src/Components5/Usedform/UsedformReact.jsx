import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UsedformReact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formdata, setFormdata] = useState([]);

  const onsubmit = (data) => {
    setFormdata((prev) => [...prev, data]);
    reset();
  };

  console.log("formdata", formdata);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-800">
      <form onSubmit={handleSubmit(onsubmit)} className="bg-gray-300 px-5 py-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Fullname</label>
          <input
            {...register("fullname", { required: "full name is required" })}
            className="border border-gray-400"
          />

          {errors.fullname && (
            <div className="text-red-500">{errors.fullname.message}</div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            className="border border-gray-400"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-3 py-2 rounded-lg mt-2"
        >
          Submit
        </button>
      </form>

      <div className="mt-5 bg-gray-400 p-5">
        {formdata.length > 0 ? (
          formdata.map((item, index) => (
            <div key={index}>
              <p>Name: {item?.fullname}</p>
              <p>Email: {item?.email}</p>
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
};

export default UsedformReact;

import React, { useEffect, useState } from "react";

const NormalFormValidation = () => {
  const [empForm, setEmpForm] = useState({});
  const [data, setData] = useState([]);

  const [error, setError] = useState({});

  const handelchange = (e) => {
    const { name, value } = e.target;
    setEmpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handelSumbit = (e) => {
    e.preventDefault();

    
      let newErrors = {};

      if (!empForm.fullname) {
        newErrors.fullname = "Full name is required";
      }
      if (!empForm.email) {
        newErrors.email = "Email is required";
      }
      if (!empForm.number) {
        newErrors.number = "Number is required";
      }
      if (!empForm.address) {
        newErrors.address = "Address is required";
      }

      setError(newErrors);

      // stop submit if error exists
      if (Object.keys(newErrors).length > 0) {
        return;
      }

      const userform = { id: Math.random(), ...empForm };

      setData((prev) => [...prev, userform]);
      setEmpForm({ fullname: "", email: "", number: "", address: "" });
  };

  console.log("data", data);

  return (
    <div className="min-h-screen flex items-center justify-start flex-col bg-gray-800">
      <h3 className="text-center mb-2 mt-5 text-white">NormalFormValidation</h3>

      <form
        onSubmit={handelSumbit}
        className="w-auto h-auto bg-gray-100 px-5 py-5 rounded-lg"
      >
        <div className="grid  grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Fullname</label>
            <input
              className="border-2 border-gray-500 rounded px-2"
              type="text"
              name="fullname"
              id="fullname"
              value={empForm.fullname}
              onChange={handelchange}
              placeholder="enter fullname"
            />

            <div>
              <p>
                {error ? (
                  <div className="text-red-600">{error.fullname}</div>
                ) : null}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-gray-500 rounded px-2"
              type="text"
              name="email"
              id="email"
              value={empForm.email}
              onChange={handelchange}
              placeholder="enter email"
            />

            <div>
              <p>
                {error ? (
                  <div className="text-red-600">{error.email}</div>
                ) : null}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="number">Number</label>
            <input
              className="border-2 border-gray-500 rounded px-2"
              type="text"
              name="number"
              id="number"
              value={empForm.number}
              onChange={handelchange}
              placeholder="enter number"
            />

            <div>
              <p>
                {error ? (
                  <div className="text-red-600">{error.number}</div>
                ) : null}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input
              className="border-2 border-gray-500 rounded px-2"
              type="text"
              name="address"
              id="address"
              value={empForm.address}
              onChange={handelchange}
              placeholder="enter address"
            />
            <div>
              <p>
                {error ? (
                  <div className="text-red-600">{error.address}</div>
                ) : null}
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-lg py-2 px-5 mt-3 "
        >
          submit
        </button>
      </form>

      <div className="mt-10 bg-gray-200 w-80 px-2">
        {data.map((item) => (
          <div key={item.id}>
            <p>name: {item?.fullname}</p>
            <p>Email: {item?.email}</p>
            <p>Number: {item?.number}</p>
            <p>Address: {item?.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalFormValidation;

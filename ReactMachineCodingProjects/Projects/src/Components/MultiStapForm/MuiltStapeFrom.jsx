import React, { useState } from "react";

const MuiltStapeFrom = () => {
  const [stape, setStape] = useState(1);
  const [formdata, setFormData] = useState("");
  const [data, setData] = useState({});
  const [isShow, setIsShow] = useState(false);

  const handelChnage = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handelStatpe = (id) => {
    if (formdata["name"].length > 1) {
      setStape(id);
    }
  };

  const handelStatpe2 = (id) => {
    if (formdata["email"].length > 1) {
      setStape(id);
    }
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    setData(formdata);

    // alert(`${data.name} ${data.email}`)
    setStape(1);
    setFormData({ name: "", email: "", password: "" });
    setIsShow(true);
  };

  // console.log("formdata", formdata);
  // console.log("data", data);
  // console.log("stape", stape);

  return (
    <div>
      MuiltStapeFrom
      {!isShow ? (
        <form onSubmit={handelsubmit}>
          {stape === 1 && (
            <div className="bg-slate-600 flex items-center flex-col w-52 mx-auto gap-5 p-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formdata.name}
                onChange={handelChnage}
                placeholder="enter your name"
                required
                className="text-black"
              />

              <button
                onClick={() => handelStatpe(2)}
                className="bg-blue-500 px-5 py-2"
              >
                next
              </button>
            </div>
          )}

          {stape === 2 && (
            <div className="bg-slate-600 flex items-center flex-col w-52 mx-auto gap-5 p-2">
              <button onClick={() => setStape(1)}>back</button>
              <label htmlFor="name">email</label>
              <input
                type="email"
                id="name"
                name="email"
                value={formdata.email}
                placeholder="enter your email"
                onChange={handelChnage}
                required
                className="text-black"
              />

              <button
                onClick={() => handelStatpe2(3)}
                className="bg-blue-500 px-5 py-2"
              >
                next
              </button>
            </div>
          )}

          {stape === 3 && (
            <div className="bg-slate-600 flex items-center flex-col w-52 mx-auto gap-5 p-2">
              <button onClick={() => setStape(2)}>back</button>
              <label htmlFor="name">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formdata.password}
                onChange={handelChnage}
                placeholder="enter your password"
                required
                className="text-black"
              />

              <button type="submit" className="bg-green-500 px-5 py-2">
                submit
              </button>
            </div>
          )}
        </form>
      ) : (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.password}</p>
        </div>
      )}
    </div>
  );
};

export default MuiltStapeFrom;

import React, { useEffect, useState } from "react";

const ImageChange = () => {
  const [id, setId] = useState(1);

  const array = [
    {
      id: 1,
      name: "shubham",
      img:"https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "shubham2",
      img:"https://plus.unsplash.com/premium_photo-1677329952685-aecee218884a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "shubham3",
      img:"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  const handelIncrease = (id) => {
    if(id >= 3){
        return 3
    }
    setId(id + 1);
  };


  useEffect(() => {
    const fatcData = () => {

         setInterval(() =>{
            setId(id + 1);

            if(id >= 3){
                return setId(1)
            }

        },7000)

    }

    fatcData()

  },[id])


  const handelDcrese = (id) => {
    if(id <= 1){
        return 1
    }
    setId(id - 1);
  };

  const filterData = array.filter((ites) => {
    return ites.id === parseInt(id);
  });

//   console.log(id);
  return (
    <>
      <div className="bg-gray-600 flex items-center justify-center flex-row gap-3 min-h-screen w-full">
        {filterData.map((item) => (
          <div
            key={item.id}
            className=" bg-gray-700 w-full min-h-[60vh] flex items-center justify-center flex-col"
          >
            <p className="text-white">{item.name}</p>
            <img src={item.img} alt="" className="h-[50vh] w-[50vw] object-cover"/>

            <div className="flex gap-5 items-center justify-center mt-5">
              <button
                onClick={() => handelDcrese(item.id)}
                className="bg-gray-600 px-5 py-2"
              >
                {"<"}
              </button>
              <button  onClick={() => handelIncrease(item.id)} className="bg-gray-600 px-5 py-2">{">"}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageChange;

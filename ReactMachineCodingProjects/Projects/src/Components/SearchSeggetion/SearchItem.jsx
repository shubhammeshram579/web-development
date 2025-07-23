import React, { useEffect, useState } from "react";

const array = [
  {
    id: Math.random(),
    items: "milk",
  },

  {
    id: Math.random(),
    items: "metter",
  },

  {
    id: Math.random(),
    items: "mid",
  },

  {
    id: Math.random(),
    items: "mini",
  },
];
const SearchItem = () => {
  const [search, setSerach] = useState("");
  const [filterData, setFilterData] = useState([]);

  const [todo ,setTodo] = useState([])
  const [color ,setColor] = useState("")

  const [isshow ,setIsshow] = useState(false)

  useEffect(() => {
    const fatchData = async () => {
      const response = await array.filter((items) => {
        let matchid = items.items === search;
        return matchid;
      });
      setFilterData(response);
    };

    fatchData();
  }, [search]);

  const handelAdd = (item) => {
    const itemslist = {id:Math.random(), list:item}
    setTodo((values) => [...values,itemslist])
    // setIsshow(true)

  }

  console.log(search);
  console.log(filterData);
  console.log("todo",todo);

  const deleteList = (id) => {
    setTodo((values) => values.filter((item) => (item.id !== id)))
  }

  const chacngeColor = (id) => {

    const respinse = todo.find((item) => (item.id === id))

    if(respinse){
        setColor("line-through")
    }
    console.log("respinse",respinse)
    
  }


  return (
    <div>
      SearchItem
      <div className="flex items-center justify-center flex-col gap-2">
        <input
          className="text-black"
          type="text"
          value={search}
          placeholder="search your items list"
          onChange={(e) => setSerach(e.target.value)}
        />

        {!isshow && <div className="bg-gray-500">
          {filterData.length > 0
            ? array.map((item) => (
                <div key={item.id} className="bg-gray-600 w-44">
                  <button onClick={() => handelAdd(item.items)}>{item.items}</button>
                </div>
              ))
            : filterData.map((item) => (
                <div key={item.id} className="bg-gray-600 w-44">
                  <button onClick={() => handelAdd(item.items)}>{item.items}</button>
                </div>
              ))}
        </div>}

        <div className={`w-44 mt-5 bg-gray-600 `}>
            {todo.map((itam) => (
                <div key={itam.id} className="flex items-center justify-between px-2">
                    <button onClick={() => chacngeColor(itam.id)}>C</button>
                    <p style={{textDecoration:color}}>{itam.list}</p>
                    <button onClick={() => deleteList(itam.id)}>X</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

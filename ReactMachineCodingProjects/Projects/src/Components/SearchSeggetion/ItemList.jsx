import React from "react";

const ItemList = ({ listI, deleteList, chacngeColor }) => {
  console.log(listI);
  return (
    <div className={`flex items-center justify-between px-2 bg-gray-700 "}`}>
      <button onClick={() => chacngeColor(listI.id)}>C</button>
      <p className={`${listI.isItem === true ? "line-through": ""}`}>{listI.list}</p>
      <button onClick={() => deleteList(listI.id)}>X</button>
    </div>
  );
};

export default ItemList;

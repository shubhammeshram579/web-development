import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCard,login } from "../ReducxToolKit/Authslice";
import { useNavigate } from "react-router-dom";

const AddCards = () => {
  const dispactch = useDispatch()
  const navigate = useNavigate()
  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const response = await axios("https://fakestoreapi.com/products");

      setProduct(response.data);
    };
    fatchData();
  }, []);

//   console.log(product);

const userdetail = {
  email:"shubham123@gmail.com",
  password:"123456"
}

const handelAddCard = (item) => {
  dispactch(addCard(item))
  dispactch(login(userdetail))
  navigate(`/crudCard`)

}

  return (
    <div className=" grid grid-cols-5 gap-5 pt-5 min-h-screen">
      {product.length > 0 ? (
        product.map((item) => (
          <div key={item.id} className="flex items-center justify-center flex-col gap-4">
            <img className="h-20 w-20" src={item.image} alt="" />
            <p>{item.category}</p>
            <button onClick={() => handelAddCard(item)} className="bg-amber-500 px-2 py-1 rounded">addCard</button>
          </div>
        ))
      ) : (
        <div className="text-center">Proruct not availble</div>
      )}
    </div>
  );
};

export default AddCards;

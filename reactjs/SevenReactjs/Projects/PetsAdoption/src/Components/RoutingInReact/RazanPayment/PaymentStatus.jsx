import React from "react";
import { useSelector } from "react-redux";

const PaymentStatus = () => {
  const paymentStatus = useSelector((state) => state.auth.paymentStatus);

  return (
    <div style={{padding:"100px"}}>
      <h2 >Payment Status:</h2>
      {paymentStatus ? (
        <p >{paymentStatus}</p>
      ) : (
        <p >No payment made yet.</p>
      )}
    </div>
  );
};

export default PaymentStatus;

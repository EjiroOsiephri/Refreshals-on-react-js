import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/carts");
    }, 2000);
  }, []);
  return (
    <div>
      <Navigate to="/welcome" />
    </div>
  );
};

export default Notfound;

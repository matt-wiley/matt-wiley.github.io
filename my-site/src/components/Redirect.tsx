import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IRedirectProps {
  to: string
}

const Redirect = (props: IRedirectProps) => {
  
  const navigate = useNavigate();
  
  return (
    <>
      {
        useEffect(() => {
          console.log(`Redirecting to ${props.to}`);
          navigate(`${props.to}`);
        })
      }
    </>
  );
};

export default Redirect;
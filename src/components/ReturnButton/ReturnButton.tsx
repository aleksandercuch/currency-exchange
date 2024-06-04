// CORE
import React from 'react';

import { useNavigate } from 'react-router-dom';

// UI
import { StyledReturnButton } from './styles';
import { IoReturnDownBack } from "react-icons/io5";

export const ReturnButton = () => {
  const navigatge = useNavigate();

  const handleClick = () => {
     navigatge('/'); 
  };
  return (
    <>
      <StyledReturnButton onClick={handleClick}><IoReturnDownBack /></StyledReturnButton>
    </>
  );
};



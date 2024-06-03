// CORE
import { useNavigate } from 'react-router-dom';

// UI
import { StyledReturnButton } from 'styles/reusable/Buttons';
import { IoReturnDownBack } from "react-icons/io5";

export const RetrunButton = () => {
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



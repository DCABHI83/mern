import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
    const error =useRouteError()
    const navigateBack= useNavigate()

    const handleClick = ()=>{
        navigateBack(-1)
    }

  return (
      <>
    <ErrorContainer>
     <div className="img-container">
   <img src="https://cdn.dribbble.com/userupload/21423931/file/original-da7091648696cc6128c664a2ea3f263e.gif" alt="404" />
     </div>
     <button onClick={handleClick}>Go Back</button>
    </ErrorContainer>
      </>
    
  )
}

export default Error
const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a2c30; 
  
  .img-container {
    width: 60%; 
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    background-color: red;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: darkred;
  }
`;


import React from "react";

const Modal = ({selectedImg , setSelectedImg}) => {


    const handleClick=()=>{

        setSelectedImg(null)
    }
  return (
    <div className="backdrop" onClick={handleClick}>


      <img src={selectedImg} alt="modal" />
    </div>
  );
};


export default Modal
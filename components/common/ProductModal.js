import React, { useRef} from "react";

const ProductModal = ({ show, onClose, children }) => {
  
  const modalWrapperRef = useRef(null);
  
  const scrollHandler=(e)=>{
    if (!modalWrapperRef?.current?.contains(e.target)) {
      e.preventDefault();
    }    
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
    if(!modalWrapperRef?.current?.contains(e.target)){
      onClose();
    }else{
    }
  };

  const modalContent =(
    <div className="StyledModalOverlay" onClick={handleClick}>
      <div className="StyledModalWraper" ref={modalWrapperRef}>
        <div className="StyledModal">
          <div className="StyledModalHeader">
            <button href="#" onClick={()=>onClose()}>
              x
            </button>
          </div>
          <div className="StyledModalBody">{children}</div>
        </div>
      </div>
    </div>
  );

  return show?modalContent:null;
};



export default ProductModal;

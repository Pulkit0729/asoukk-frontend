import React, { useRef} from "react";
import classes from './BottomModal.module.css'

const BottomModal = ({ show, onClose, children }) => {
  
  const modalWrapperRef = useRef(null);
  
  const scrollHandler=(e)=>{
    if (!modalWrapperRef?.current?.contains(e.target)) {
      e.preventDefault();
    }    
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(!modalWrapperRef?.current?.contains(e.target)){
      onClose();
    }else{
      
    }
  };

  const modalContent =(
    <div className={classes.Modal}>
      <div className={classes["StyledModalOverlay"] }onClick={handleClick}/>
      <div className={classes["StyledModalWraper"]} ref={modalWrapperRef}>
        <div className={classes["StyledModal"]}>
          <div className={classes["StyledModalBody"]}>{children}</div>
        </div>
      </div>
    </div>
  );

  return show?modalContent:null;
};



export default BottomModal;

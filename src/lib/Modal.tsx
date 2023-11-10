import React from "react";
import "./Modal.module.css";

export interface ModalProps {
  isOpen: boolean;
  hide: () => void;
  content?: string;
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, hide, content = "Employee Created !", className } = props;
  return (
    isOpen && (
      <>
        <div className={`${className + " backdrop"}`} />
        <div className={`${className + " wrapper"}`}>
          <div className={`${className + " styledModal"}`}>
            <p className={`${className + " closeButton"}`} onClick={hide}>
              X
            </p>
            <p className={`${className + " content"}`}>{content}</p>
          </div>
        </div>
      </>
    )
  );
};

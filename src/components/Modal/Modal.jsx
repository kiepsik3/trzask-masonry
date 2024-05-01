import "./modal.scss";
import React from "react";
import cn from "classnames";

export function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content-wrapper">
        <div onClick={() => props.onClose(false)} className="close-icon">
          <img src="/img/close.svg" alt="close-icon" />
        </div>
        <div className={cn("modal-content")}>{props.children}</div>
      </div>
    </div>
  );
}

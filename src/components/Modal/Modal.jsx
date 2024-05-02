import "./modal.scss";
import React from "react";
import cn from "classnames";
import { ReactComponent as Close } from "../../assets/img/close.svg";

export function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content-wrapper">
        <div onClick={() => props.onClose(false)} className="close-icon">
          <Close />
        </div>
        <div className={cn("modal-content")}>{props.children}</div>
      </div>
    </div>
  );
}

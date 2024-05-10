import "./modal.scss";
import React, { useEffect, useRef } from "react";
import cn from "classnames";

export function Modal(props) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.onClose(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return (
    <div className="modal">
      <div className="modal-content-wrapper" ref={ref}>
        <div className={cn("modal-content")}>{props.children}</div>
      </div>
    </div>
  );
}

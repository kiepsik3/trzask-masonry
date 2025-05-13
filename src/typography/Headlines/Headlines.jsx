import React from "react";
import "./headlines.scss";
import cn from "classnames";

export function Headline1(props) {
  return (
    <h1 className={cn("headline-1", props.violet && "violet", props.className)}>
      {props.children}
    </h1>
  );
}

export function Headline2(props) {
  return (
    <h2 className={cn("headline-2", props.violet && "violet", props.className)}>
      {props.children}
    </h2>
  );
}

export function Headline3(props) {
  return (
    <h3 className={cn("headline-3", props.violet && "violet", props.className)}>
      {props.children}
    </h3>
  );
}

export function Headline4(props) {
  return (
    <h3 className={cn("headline-4", props.violet && "violet", props.className)}>
      {props.children}
    </h3>
  );
}

import React from "react";
import s from "./PageContainer.module.css";

export const PageContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

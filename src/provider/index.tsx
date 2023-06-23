"use client";

import { ReactNode } from "react";
import { StyledComponents } from "./styled-components";

import "../translate/index";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <StyledComponents>{children}</StyledComponents>;
};

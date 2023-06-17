'use client';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from "@/styles/Globals";
import { ReactNode } from 'react';
import '@/translations/index'

export const StyledProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
        {children}
        <GlobalStyles />
    </StyledComponentsRegistry>
  );
};
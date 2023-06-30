import theme from "@/assets/css/theme";
import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/css/global";

export const StyledComponents = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles
          raw={[]}
          length={0}
          toString={undefined}
          toLocaleString={undefined}
          concat={function (...items: ConcatArray<string>[]): string[] {
            throw new Error("Function not implemented.");
          }}
          join={function (separator?: string | undefined): string {
            throw new Error("Function not implemented.");
          }}
          slice={function (
            start?: number | undefined,
            end?: number | undefined
          ): string[] {
            throw new Error("Function not implemented.");
          }}
          indexOf={function (
            searchElement: string,
            fromIndex?: number | undefined
          ): number {
            throw new Error("Function not implemented.");
          }}
          lastIndexOf={function (
            searchElement: string,
            fromIndex?: number | undefined
          ): number {
            throw new Error("Function not implemented.");
          }}
          every={function <S extends string>(
            predicate: (
              value: string,
              index: number,
              array: readonly string[]
            ) => value is S,
            thisArg?: any
          ): this is readonly S[] {
            throw new Error("Function not implemented.");
          }}
          some={function (
            predicate: (
              value: string,
              index: number,
              array: readonly string[]
            ) => unknown,
            thisArg?: any
          ): boolean {
            throw new Error("Function not implemented.");
          }}
          forEach={function (
            callbackfn: (
              value: string,
              index: number,
              array: readonly string[]
            ) => void,
            thisArg?: any
          ): void {
            throw new Error("Function not implemented.");
          }}
          map={function <U>(
            callbackfn: (
              value: string,
              index: number,
              array: readonly string[]
            ) => U,
            thisArg?: any
          ): U[] {
            throw new Error("Function not implemented.");
          }}
          filter={function <S extends string>(
            predicate: (
              value: string,
              index: number,
              array: readonly string[]
            ) => value is S,
            thisArg?: any
          ): S[] {
            throw new Error("Function not implemented.");
          }}
          reduce={function (
            callbackfn: (
              previousValue: string,
              currentValue: string,
              currentIndex: number,
              array: readonly string[]
            ) => string
          ): string {
            throw new Error("Function not implemented.");
          }}
          reduceRight={function (
            callbackfn: (
              previousValue: string,
              currentValue: string,
              currentIndex: number,
              array: readonly string[]
            ) => string
          ): string {
            throw new Error("Function not implemented.");
          }}
          find={function <S extends string>(
            predicate: (
              value: string,
              index: number,
              obj: readonly string[]
            ) => value is S,
            thisArg?: any
          ): S | undefined {
            throw new Error("Function not implemented.");
          }}
          findIndex={function (
            predicate: (
              value: string,
              index: number,
              obj: readonly string[]
            ) => unknown,
            thisArg?: any
          ): number {
            throw new Error("Function not implemented.");
          }}
          entries={function (): IterableIterator<[number, string]> {
            throw new Error("Function not implemented.");
          }}
          keys={function (): IterableIterator<number> {
            throw new Error("Function not implemented.");
          }}
          values={function (): IterableIterator<string> {
            throw new Error("Function not implemented.");
          }}
          includes={function (
            searchElement: string,
            fromIndex?: number | undefined
          ): boolean {
            throw new Error("Function not implemented.");
          }}
          flatMap={function <U, This = undefined>(
            callback: (
              this: This,
              value: string,
              index: number,
              array: string[]
            ) => U | readonly U[],
            thisArg?: This | undefined
          ): U[] {
            throw new Error("Function not implemented.");
          }}
          flat={function <A, D extends number = 1>(
            this: A,
            depth?: D | undefined
          ): FlatArray<A, D>[] {
            throw new Error("Function not implemented.");
          }}
          at={function (index: number): string | undefined {
            throw new Error("Function not implemented.");
          }}
          findLast={function <S extends string>(
            predicate: (
              value: string,
              index: number,
              array: readonly string[]
            ) => value is S,
            thisArg?: any
          ): S | undefined {
            throw new Error("Function not implemented.");
          }}
          findLastIndex={function (
            predicate: (
              value: string,
              index: number,
              array: readonly string[]
            ) => unknown,
            thisArg?: any
          ): number {
            throw new Error("Function not implemented.");
          }}
        />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

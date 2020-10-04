import React, { FC } from "react";

type FlexProps = {
  children?: any;
  className?: string;
  container?: boolean;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

const Flex: FC<FlexProps> = ({
  children,
  className,
  container,
  justifyContent,
  flexDirection,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
  flex,
  alignItems,
  margin,
  padding,
  width,
  height,
  maxWidth
}) => {
  return (
    <div
      className={className}
      style={{
        display: container ? "flex" : "block",
        justifyContent: justifyContent || "flex-start",
        flexDirection: flexDirection || "row",
        flexGrow: flexGrow || 0,
        flexBasis: flexBasis || "auto",
        flexShrink: flexShrink || 1,
        flexWrap: flexWrap || "nowrap",
        flex: flex || "0 1 auto",
        alignItems: alignItems || "stretch",
        margin: margin || "0",
        padding: padding || "0",
        width: width || "auto",
        height: height || "auto",
        maxWidth: maxWidth || "none"
      }}
    >
      {children}
    </div>
  );
};

export default Flex;

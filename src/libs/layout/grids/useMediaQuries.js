import React, { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { useGrid } from "./Provider";
type BREAK_POINTS = {
    base: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};

type BREAK_POINTS_LOGIC = {
    base: any;

    xs: any;
    sm: any;
    md: any;
    lg: any;
    xl: any;
};

const initialBreakPoints: BREAK_POINTS = {
    base: 0,
    xs: 414,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
};

function useMediaQuery(customBreakPoints?: BREAK_POINTS) {

    const { width } = useWindowDimensions();
    let { breakpoints } = useGrid();


  //  const breakPoints = customBreakPoints ? customBreakPoints : initialBreakPoints;
    const breakPoints = {
        base: 0,
        xs: breakpoints.xs,
        sm: breakpoints.sm,
        md: breakpoints.md,
        lg: breakpoints.lg,
        xl: breakpoints.xl
    };

    const resultantDimension = useCallback(
        (base: number, xs: number, sm?: number, md?: number, lg?: number, xl?: number) => {
            if (width > breakPoints.base && width <= breakPoints.xs) {
                return base;
            } else if (width > breakPoints.xs && width <= breakPoints.sm) {
                return xs ?? base;
            } else if (width > breakPoints.sm && width <= breakPoints.md) {
                return sm ?? xs ?? base;
            } else if (width > breakPoints.md && width <= breakPoints.lg) {
                return md ?? sm ?? xs ?? base;
            } else if (width > breakPoints.lg && width <= breakPoints.xl) {
                return lg ?? md ?? sm ?? xs ?? base;
            } else {
                return xl ?? lg ?? md ?? sm ?? xs ?? base;
            }
        },
        [width, breakPoints]
    );

    const resultantValue = useCallback(
        (base: any, xs: any, sm: any, md: any, lg: any, xl: any) => {
            if (width > breakPoints.base && width <= breakPoints.xs) {
                return base;
            } else if (width > breakPoints.xs && width <= breakPoints.sm) {
                return xs ?? base;
            } else if (width > breakPoints.sm && width <= breakPoints.md) {
                return sm ?? xs ?? base;
            } else if (width > breakPoints.md && width <= breakPoints.lg) {
                return md ?? sm ?? xs ?? base;
            } else if (width > breakPoints.lg && width <= breakPoints.xl) {
                return lg ?? md ?? sm ?? xs ?? base;
            } else {
                return xl ?? lg ?? md ?? sm ?? xs ?? base;
            }
        },
        [width, breakPoints]
    );

    const mediaQuery = useCallback(
        (
            dimensions: Array<number> | (Partial<BREAK_POINTS> & { base: number })
        ) => {
            if (Array.isArray(dimensions)) {
                const [base, xs, sm, md, lg, xl] = dimensions;
                return resultantDimension(base, xs, sm, md, lg, xl);
            } else {
                const { base, xs, sm, md, lg, xl } = dimensions;
                return resultantDimension(base, xs, sm, md, lg, xl);
            }
        },
        [resultantDimension]
    );

    const mediaQueryLogic = useCallback(
        (
            dimensions: Array<any> | (Partial<BREAK_POINTS_LOGIC> & { base: any })
        ) => {
            if (Array.isArray(dimensions)) {
                const [base, xs, sm, md, lg, xl] = dimensions;
                return resultantValue(base, xs, sm, md, lg, xl);
            } else {
                const { base, xs, sm, md, lg, xl } = dimensions;
                return resultantValue(base, xs, sm, md, lg, xl);
            }
        },
        [resultantValue]
    );

    return {
        mediaQuery,
        mediaQueryLogic,
        mQ: mediaQuery,
        mQL: mediaQueryLogic,
    };
}

export default useMediaQuery;
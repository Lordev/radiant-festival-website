"use client";
import useBreakpointsStore from "@/lib/store/breakpoints";
import { useEffect } from "react";
import Sticky from "@/components/shared/Sticky";
import { PropsWithChildren } from "react";

export default function StickyContainer({ children }: PropsWithChildren) {
    const { smallMobile, mobile, tablet, largeTablet, initializeBreakpoints } =
        useBreakpointsStore();

    useEffect(() => {
        const cleanup = initializeBreakpoints();
        return () => {
            cleanup();
        };
    }, [initializeBreakpoints]);

    return (
        <Sticky
            enabled={!smallMobile && !mobile && !tablet && !largeTablet}
            top={400}
            bottomBoundary="#TableContainer"
            className=""
        >
            {children}
        </Sticky>
    );
}

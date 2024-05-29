"use client";
import { useScreenBreakPoint } from "@/lib/context/useContextScreenBreakPoints";
import Sticky from "@/components/Sticky";
import { PropsWithChildren } from "react";

export default function StickyContainer({ children }: PropsWithChildren) {
    const { smallMobile, mobile, tablet, largeTablet } = useScreenBreakPoint();

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

"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import useBreakpointsStore from "@/lib/store/breakpoints";

interface AnimatedImageProps {
    src: string;
    width?: number;
    height?: number;
    className: string;
    animation?: string;
    animationTiming?: number;
}

export default function AnimatedImage({
    src,
    className,
    width,
    height,
    animation,
    animationTiming = 0.9,
}: AnimatedImageProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [calculatedWidth, setCalculatedWidth] = useState(0);
    const [calculatedHeight, setCalculatedHeight] = useState(0);

    const {
        largeDesktop,
        mediumDesktop,
        smallDesktop,
        tablet,
        largeTablet,
        mobile,
        smallMobile,
        initializeBreakpoints,
    } = useBreakpointsStore();

    useEffect(() => {
        const cleanup = initializeBreakpoints();
        return () => {
            cleanup();
        };
    }, [initializeBreakpoints]);

    useEffect(() => {
        const handleResize = () => {
            if (width && height) {
                const sizes = {
                    biggest: { width: width, height: height },
                    big: { width: width * 0.9, height: height * 0.9 },
                    normal: { width: width * 0.6, height: height * 0.6 },
                    mobile: { width: width * 0.5, height: height * 0.5 },
                    smallMobile: { width: width * 0.3, height: height * 0.3 },
                };

                let calculatedWidth, calculatedHeight;

                if (largeDesktop) {
                    calculatedWidth = sizes.biggest.width;
                    calculatedHeight = sizes.biggest.height;
                } else if (mediumDesktop) {
                    calculatedWidth = sizes.big.width;
                    calculatedHeight = sizes.big.height;
                } else if (smallDesktop) {
                    calculatedWidth = sizes.normal.width;
                    calculatedHeight = sizes.normal.height;
                } else if (largeTablet || tablet || mobile) {
                    calculatedWidth = sizes.mobile.width;
                    calculatedHeight = sizes.mobile.height;
                } else if (smallMobile) {
                    calculatedWidth = sizes.smallMobile.width;
                    calculatedHeight = sizes.smallMobile.height;
                }

                if (!calculatedWidth || !calculatedHeight) return;

                setCalculatedWidth(calculatedWidth);
                setCalculatedHeight(calculatedHeight);
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Call handleResize on initial render
        handleResize();

        // Remove event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [
        width,
        height,
        largeDesktop,
        mediumDesktop,
        smallDesktop,
        largeTablet,
        tablet,
        mobile,
        smallMobile,
    ]);

    return (
        <div
            className={`${className}`}
            style={{
                transform: isInView ? "" : animation,
                opacity: isInView ? 1 : 0,
                transition: `transform ${animationTiming}s cubic-bezier(0.17, 0.55, 0.55, 1) .1s`,
                height: calculatedHeight + "px",
                width: calculatedWidth + "px",
            }}
            ref={ref}
        >
            <Image
                src={src}
                alt="leaf"
                fill
                style={{
                    objectFit: "contain",
                }}
                sizes={`(max-width: ${width}px) (max-height: ${height}px)`}
            />
        </div>
    );
}

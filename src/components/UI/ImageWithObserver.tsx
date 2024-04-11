import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface ImageWithObserverProps {
    src: string;
    width: number;
    height: number;
    className: string;
    animation?: string;
    animationTiming?: number;
}

export default function ImageWithObserver({
    src,
    width,
    height,
    className,
    animation,
    animationTiming = 0.9,
}: ImageWithObserverProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <Image
                src={src}
                alt="leaf"
                width={width}
                height={height}
                className={className}
                style={{
                    transform: isInView ? "" : animation,
                    opacity: isInView ? 1 : 0,
                    transition: `all ${animationTiming}s cubic-bezier(0.17, 0.55, 0.55, 1) .1s`,
                }}
                ref={ref}
            />
        </>
    );
}

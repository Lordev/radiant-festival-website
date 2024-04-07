import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
    src: string;
    width: number;
    height: number;
    className: string;
    animation: string;
}

export default function AnimatedImage({
    src,
    width,
    height,
    className,
    animation,
}: AnimatedImageProps) {
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
                    transform: isInView ? "none" : animation,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                ref={ref}
            />
    
        </>
    );
}

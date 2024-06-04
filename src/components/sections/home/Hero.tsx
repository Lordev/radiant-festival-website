"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import CountdownTimer from "../../ui/CountdownTimer";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        const headerHeight = document.querySelector(".header")?.clientHeight;
        if (!headerHeight) return;
        setHeaderHeight(headerHeight);
    }, []);

    console.log(headerHeight);

    return (
        <Container>
            <picture>
                <source media="(max-width: 480px)" srcSet="/hero-mobile@480w.jpg" />
                <source media="(max-width: 1024px)" srcSet="/hero-tablet@1024w.jpg" />
                <Image
                    src={"/Hero@2300w.jpg"}
                    fill
                    alt="Hero=Image"
                    style={{
                        zIndex: 0,
                        objectFit: "cover",
                    }}
                />
            </picture>
            <div
                className="items-center justify-center flex flex-col gap-20 md:gap-40 h-screen md:py-20 lg:py-40 text-balance *:z-10 font-krona-one"
                style={{ height: `calc(100vh - ${headerHeight}px)` }}
            >
                <div className="text-center text-yellow-400 uppercase max-w-[885px] lg:text-7xl sm:text-4xl text-xl -translate-[100%]">
                    <span className="text-amber-100">This music Festival</span>{" "}
                    <span className="text-amber-100">will</span>
                    <span className="text-yellow-400"> be the Brightest</span>
                </div>
                <CountdownTimer endDate={new Date("2024-07-01T13:00")} />

                <Image
                    src="/scroll-icon.png"
                    alt="scroll-icon"
                    width={52}
                    height={64}
                    className="md:w-[52px] sm:w-[40px] w-[32px]"
                />
            </div>
        </Container>
    );
}

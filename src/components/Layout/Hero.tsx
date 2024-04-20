"use client";

import Image from "next/image";
import Countdown, { zeroPad } from "react-countdown";
import Container from "@/components/UI/Container";

interface CountdownSettingsProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const Completionist = () => <span>See you next year!</span>;

// Renderer callback with condition
const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
}: CountdownSettingsProps) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span className="text-2xl font-semibold text-center text-white uppercase max-w-[362px] lg:text-5xl">
                {zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} :{" "}
                {zeroPad(seconds)}
            </span>
        );
    }
};

export default function Hero() {
    return (
        <Container className="bg-hero bg-no-repeat bg-cover">
            <div className=" h-screen  items-center justify-center flex flex-col gap-40 pt-40 text-balance">
                <div className="text-7xl text-center text-yellow-400 uppercase max-w-[885px] max-md:text-4xl">
                    <span className="text-amber-100">This music Festival</span>{" "}
                    <span className="text-amber-100">will</span>
                    <span className="text-yellow-400"> be the Brightest</span>
                </div>
                <div>
                    <Countdown date={Date.now() + 10000000000} renderer={renderer} />
                </div>
                <Image src="/scroll-icon.png" alt="scroll-icon" width={52} height={64} />
            </div>
        </Container>
    );
}

"use client";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-10% to-50% overflow-hidden">
            <Header />

            <div className="pt-64 pb-40 text-center">
                <h2>Contact</h2>
            </div>
            <div
                className="h-[40rem]
                w-full"
            >
                <Image
                    src={"/map-placeholder.png"}
                    width={2300}
                    height={529}
                    alt="map-placeholder"
                    className="w-full"
                />
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-3 h-screen">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Footer />
        </div>
    );
}

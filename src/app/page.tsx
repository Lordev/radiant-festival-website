"use client";

import Image from "next/image";
import Hero from "@/components/Layout/Hero";
import Card from "@/components/UI/Card";
import GallerySlider from "@/components/UI/GallerySlider";
import BannerSlider from "@/components/UI/BannerSlider";
import CardSlider from "@/components/UI/CardSlider";
import { Parallax } from "react-parallax";
import Button from "@/components/UI/Button";
import SubscribeForm from "@/components/UI/SubscribeForm";
import TimeTable from "@/components/UI/TimeTable";
import ArtistSlider from "@/components/UI/ArtistSlider";
import PageDivider from "@/components/UI/PageDivider";
import ImageWithObserver from "@/components/UI/ImageWithObserver";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-30% to-60% overflow-hidden">
            <Hero />
            <section className="relative">
                <ImageWithObserver
                    src="/leaf-1.png"
                    width={440}
                    height={597}
                    className="right-0 absolute top-24"
                    animation="translateX(200px)"
                />
                <ImageWithObserver
                    src="/leaf-2.png"
                    width={483}
                    height={729}
                    className="left-0 absolute bottom-8"
                    animation="translateX(-200px)"
                />
                <BannerSlider />
                <div className="w-3/4 mx-auto grid items-center h-full py-80">
                    <div className="flex flex-row mx-auto gap-8">
                        <ArtistSlider />
                    </div>
                </div>
                <PageDivider />
            </section>
            <section className="py-40 relative">
                <ImageWithObserver
                    src="/leaf-3.png"
                    width={313}
                    height={607}
                    className="left-0 absolute bottom-8"
                    animation="translateX(-200px)"
                />
                <ImageWithObserver
                    src="/leaf-4.png"
                    width={208}
                    height={468}
                    className="right-0 absolute top-24"
                    animation="translateX(200px)"
                />
                <div className="grid grid-cols-2 gap-20 w-3/5 mx-auto">
                    <div>
                        <h5 className="text-secondary-foreground">calendar</h5>
                        <h1 className="text-secondary-foreground">event schedule</h1>
                        <div className="relative w-[35rem]">
                            <Image
                                src={"/curve-text.png"}
                                alt="curve text"
                                width={616}
                                height={616}
                                className="mt-52 animate-spin-slow"
                            />
                            <Image
                                src={"/ellipse.png"}
                                alt="ellipse"
                                width={420}
                                height={420}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                    <TimeTable />
                </div>
            </section>
            <section className="mt-40 h-screen w-4/5 mx-auto grid grid-cols-2 gap-x-8">
                <Card backgroundColor="bg-card">
                    <div className="h-1/2 w-full z-30 absolute">
                        <CardSlider className="-rotate-[20deg] z-10 top-64" />
                    </div>
                    <div className="h-1/2 w-full absolute bottom-0 z-10">
                        <CardSlider className="rotate-[20deg] z-10 top-64" />
                    </div>
                    <Image
                        className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2"
                        src={"/card-picture.png"}
                        alt="image of girl partying"
                        width={608}
                        height={835}
                    />
                </Card>
                <Card backgroundColor="bg-card-dark " className="flex items-center">
                    <div className="m-auto gap-4 *:mb-8 w-4/5">
                        <h5 className="text-foreground">Who we are</h5>
                        <h1 className="text-foreground">
                            THE BIGGEST, MOST IMPORTANT DANCE MUSIC FESTIVAL ON THE PLANET
                        </h1>
                        <p className="text-foreground pr-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate
                        </p>
                        <Button
                            label="Click me"
                            backgroundColor="var(--accent)"
                            textColor="black"
                            primary={true}
                        />
                    </div>
                </Card>
            </section>
            <section className="relative">
                <ImageWithObserver
                    src="/leaf-5.png"
                    width={176}
                    height={396}
                    className="left-0 absolute"
                    animation="translateX(-100px)"
                />
                <ImageWithObserver
                    src="/leaf-6.png"
                    width={278}
                    height={747}
                    className="left-0 absolute bottom-40"
                    animation="translateX(-100px)"
                />
                <div className="w-4/5 mx-auto pt-40 pb-80 gap-40 relative">
                    <Image
                        src={"/newsletter-bg.png"}
                        alt="newsletter"
                        width={1317}
                        height={369}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    />
                    <div className="grid grid-cols-2 pt-40">
                        <Image
                            className="mx-auto"
                            src="/ticket.png"
                            alt="festival ticket"
                            width={355}
                            height={585}
                        />
                        <div className="relative">
                            <a href="#">
                                <Image
                                    src={"/video-placeholder.png"}
                                    alt="video player image"
                                    style={{ objectFit: "cover" }}
                                    fill={true}
                                />

                                <svg
                                    width="103"
                                    height="103"
                                    viewBox="0 0 103 103"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                                >
                                    <path
                                        d="M40 37V66L63 51.5L40 37Z"
                                        stroke="#FECB00"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="51.5"
                                        cy="51.5"
                                        r="50"
                                        stroke="#FECB00"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-2/5 mx-auto relative mt-80">
                        <SubscribeForm />
                    </div>
                </div>
            </section>
            <section className="relative">
                <Parallax
                    bgImage="festival-banner.png"
                    bgImageAlt="banner festival"
                    strength={300}
                    className="w-full"
                >
                    <div className="bg-cover bg-no-repeat h-[60rem]">
                        <div className="py-10 bg-[#E9E9E9] flex justify-center">
                            <Image
                                src="/logo-1.png"
                                alt="logo label"
                                width={175}
                                height={150}
                            />
                            <Image
                                src="/logo-2.png"
                                alt="logo label"
                                width={175}
                                height={150}
                            />
                            <Image
                                src="/logo-3.png"
                                alt="logo label"
                                width={175}
                                height={150}
                            />
                            <Image
                                src="/logo-4.png"
                                alt="logo label"
                                width={175}
                                height={150}
                            />
                            <Image
                                src="/logo-5.png"
                                alt="logo label"
                                width={175}
                                height={150}
                            />
                        </div>
                    </div>
                </Parallax>
            </section>
            <section className="relative">
                <ImageWithObserver
                    src="/leaf-7.png"
                    width={267}
                    height={709}
                    className="right-0 absolute top-20"
                    animation="translateX(200px)"
                />
                <div className="w-3/5 mx-auto mt-40">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center top-8">
                            <div className="relative w-[20rem]">
                                <Image
                                    src={"/curve-text-sm.png"}
                                    alt="curve text"
                                    width={328}
                                    height={238}
                                    className="animate-spin-slow"
                                />
                                <Image
                                    src={"/ellipse-sm.png"}
                                    alt="ellipse"
                                    width={212}
                                    height={212}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mx-auto gap-4 *:mb-8 w-4/5">
                                <h5 className="text-secondary-foreground">Who we are</h5>
                                <h1 className="text-secondary-foreground">
                                    THE BIGGEST, MOST IMPORTANT DANCE MUSIC FESTIVAL ON
                                    THE PLANET
                                </h1>
                                <p className="pr-20">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate
                                </p>
                                <Button
                                    label="Click me"
                                    backgroundColor="var(--primary)"
                                    textColor="white"
                                    primary={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-40 py-80 overflow-hidden">
                    <GallerySlider />
                </div>
                <BannerSlider />
            </section>
        </div>
    );
}

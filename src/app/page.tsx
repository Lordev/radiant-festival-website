"use client";

import Image from "next/image";
import Hero from "@/components/Layout/Hero";
import Card from "@/components/UI/Card";
import GallerySlider from "@/components/UI/GallerySlider";
import { Parallax } from "react-parallax";
import Button from "@/components/UI/Button";
import SubscribeForm from "@/components/UI/SubscribeForm";
import TimeTable from "@/components/UI/TimeTable";
import ArtistSlider from "@/components/UI/ArtistSlider";
import PageDivider from "@/components/UI/PageDivider";
import ImageWithObserver from "@/components/UI/ImageWithObserver";
import InfiniteSlider from "@/components/UI/InfiniteSlider";
import Container from "@/components/UI/Container";
import SpinningText from "@/components/UI/SpinningText";
import Sticky from "react-stickynode";
import { useScreenBreakPoint } from "@/context/useContextScreenBreakPoints";
import VideoPopUpPlayer from "@/components/UI/VideoPopupPlayer";
import PrivacyPolicy from "@/components/Layout/PrivacyPolicy";

export default function Home() {
    const { smallMobile, mobile, tablet, largeTablet } = useScreenBreakPoint();

    return (
        <main className="bg-gradient-to-b from-background via-accent-secondary to-background from-35% to-65% lg:from-45% lg:to-60% overflow-hidden xl:from-35%">
            <Hero />
            <section>
                <InfiniteSlider />
            </section>
            <Container>
                <ImageWithObserver
                    src="/leaf-1.png"
                    className="right-0 absolute top-4"
                    animation="translateX(100%)"
                    width={400}
                    height={557}
                />
                <ImageWithObserver
                    src="/leaf-2.png"
                    className="left-0 absolute bottom-0"
                    animation="translateX(-100%)"
                    width={428}
                    height={729}
                />
                <ImageWithObserver
                    src="/leaf-5.png"
                    className="left-0 top-4 absolute"
                    animation="translateX(-100%)"
                    width={176}
                    height={396}
                />
                <ImageWithObserver
                    src="/leaf-7.png"
                    className="right-0 absolute bottom-0"
                    animation="translateX(100%)"
                    width={267}
                    height={709}
                />
                <div className="flex flex-col lg:flex-row gap-8 justify-center py-60">
                    <ArtistSlider />
                </div>
                <PageDivider />
            </Container>
            <Container className="mt-8 lg:mt-40" id="TableContainer">
                <div className="gap-x-8 grid xl:grid-cols-[minmax(480px,1fr)_2fr] grid-rows-[repeat(auto,2)] px-4 relative">
                    <Sticky
                        enabled={window.innerWidth > 1280}
                        top={400}
                        bottomBoundary="#TableContainer"
                        className=""
                    >
                        <div className="text-center xl:text-left">
                            <h5 className="text-secondary-foreground">calendar</h5>
                            <h1 className="text-secondary-foreground">event schedule</h1>
                        </div>
                        <div className="relative mt-20 flex justify-center xl:justify-start mb-20 xl:mb-0">
                            <SpinningText size="sm" />
                        </div>
                    </Sticky>
                    <TimeTable />
                </div>
            </Container>
            <Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32 xs:px-16 min-[570px]:px-24">
                    <Card backgroundColor="bg-card h-full min-h-[590px]">
                        <div className="-rotate-[20deg] z-20 absolute sm:-left-40 -left-6 max-w-[2200px] 4xl:top-[40px] 3xl:top-[36px] xl:top-[-20px] lg:top-[-50px] md:top-[20%] xs:top-[20%] top-[15%]">
                            <InfiniteSlider />
                        </div>
                        <div className="rotate-[20deg]  absolute sm:-left-40 -left-24 max-w-[2200px] 4xl:bottom-[40px] 3xl:bottom-[36px] mx-16 xl:bottom-[-20px] lg:bottom-[-50px] md:bottom-[20%] xs:bottom-[20%] bottom-[15%]">
                            <InfiniteSlider />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
                            <Image
                                src={"/card-picture.png"}
                                alt="image of girl partying"
                                fill
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                }}
                            />
                        </div>
                    </Card>
                    <Card
                        backgroundColor="bg-card-dark mt-20 lg:mt-0"
                        className="flex items-center"
                    >
                        <div className="m-auto gap-4 *:mb-8 w-4/5">
                            <h5 className="text-foreground">Who we are</h5>
                            <h1 className="text-foreground">
                                THE BIGGEST, MOST IMPORTANT DANCE MUSIC FESTIVAL ON THE
                                PLANET
                            </h1>
                            <p className="text-foreground pr-20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate
                            </p>
                            <Button
                                label="Click me"
                                backgroundColor="var(--accent)"
                                textColor="black"
                                primary={true}
                            />
                        </div>
                    </Card>
                </div>
            </Container>
            <Container className="mt-20 lg:mt-80 pb-80">
                <ImageWithObserver
                    src="/leaf-6.png"
                    width={278}
                    height={747}
                    className="left-0 absolute bottom-9"
                    animation="translateX(-100%)"
                />
                <ImageWithObserver
                    src="/leaf-4.png"
                    className="right-0 absolute bottom-0 h-[468px]"
                    animation="translateX(100%)"
                    width={208}
                    height={468}
                />
                <Image
                    src={"/newsletter-bg.png"}
                    alt="newsletter"
                    width={1317}
                    height={369}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                />
                <div className="grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 gap-20">
                    <Image
                        className="mx-auto"
                        src="/ticket.png"
                        alt="festival ticket"
                        width={355}
                        height={585}
                    />
                    <VideoPopUpPlayer />
                </div>
                <div className="w[30rem] lg:w-[40rem] mx-auto relative lg:mt-80 mt-40 px-8">
                    <SubscribeForm />
                    <PrivacyPolicy />
                </div>
            </Container>
            <section>
                <Parallax
                    bgImage="festival-banner.png"
                    bgImageAlt="banner festival"
                    strength={300}
                    className="w-full"
                    bgImageSizes=""
                    bgImageStyle={{ maxWidth: "none" }}
                >
                    <div className="bg-cover bg-no-repeat h-[70vh]">
                        <div className="py-10 bg-[#E9E9E9] grid-flow-col grid justify-center">
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
            <Container className="mt-16 lg:mt-40">
                <ImageWithObserver
                    src="/leaf-7.png"
                    className="right-0 absolute top-20 h-[709px]"
                    animation="translateX(200px)"
                />
                <div className="grid lg:grid-cols-2 grid=rows-2 gap-20 lg:gap">
                    <div className="flex items-center justify-center order-2 lg:order-1">
                        <SpinningText size="sm" />
                    </div>
                    <div className="lg:order-2">
                        <div className="mx-auto gap-4 *:mb-8 w-4/5">
                            <h5 className="text-secondary-foreground">Who we are</h5>
                            <h1 className="text-secondary-foreground">
                                THE BIGGEST, MOST IMPORTANT DANCE MUSIC FESTIVAL ON THE
                                PLANET
                            </h1>
                            <p className="pr-20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate
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
            </Container>
            <section className="lg:py-80 py-20">
                <div className=" overflow-hidden">
                    <GallerySlider />
                </div>
            </section>
            <section>
                <InfiniteSlider />
            </section>
        </main>
    );
}

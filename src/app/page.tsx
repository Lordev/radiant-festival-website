"use client";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Footer from "@/components/Layout/Footer";
import QuoteSlider from "@/components/UI/ArtistSlider";
import Card from "@/components/UI/Card";
import Input from "@/components/UI/Input";
import GallerySlider from "@/components/UI/GallerySlider";
import BannerSlider from "@/components/UI/BannerSlider";
import CardSlider from "@/components/UI/CardSlider";
import { Icon } from "@iconify/react";
import { Parallax } from "react-parallax";
import AnimatedImage from "@/components/UI/AnimatedImage";
import Button from "@/components/UI/Button";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-30% to-60% overflow-hidden">
            <Header />
            <Hero />
            <div className="relative">
                <AnimatedImage
                    src="/leaf-1.png"
                    width={440}
                    height={597}
                    className="right-0 absolute top-24"
                    animation="translateX(200px)"
                />
                <AnimatedImage
                    src="/leaf-2.png"
                    width={483}
                    height={729}
                    className="left-0 absolute bottom-8"
                    animation="translateX(-200px)"
                />
                <BannerSlider />
                <div className="w-3/4 mx-auto grid items-center h-full py-80">
                    <div className="flex flex-row mx-auto gap-8">
                        <div className="w-96">
                            <QuoteSlider />
                        </div>
                        <div className="flex flex-col px-5 uppercase text-[#9E6C4D] gap-16 justify-center">
                            <div>
                                <div className="w-full text-4xl font-bold">Artist </div>
                                <div className="mt-4 w-full text-base font-medium">
                                    Mark the Twinley
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="#">
                                    <Icon
                                        icon="ic:baseline-facebook"
                                        width={40}
                                        className="text-secondary-foreground hover:text-primary"
                                    />
                                </a>
                                <a href="#">
                                    <Icon
                                        icon="mdi:youtube"
                                        width={40}
                                        className="text-secondary-foreground hover:text-primary"
                                    />
                                </a>
                                <a href="#">
                                    <Icon
                                        icon="mdi:instagram"
                                        width={40}
                                        className="text-secondary-foreground hover:text-primary"
                                    />
                                </a>
                            </div>
                        </div>
                        <p className="w-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="h-[.4px] w-4/5 bg-gradient-to-r from-transparent via-black to-transparent mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 gap-40 py-40 relative">
                <AnimatedImage
                    src="/leaf-3.png"
                    width={313}
                    height={607}
                    className="left-0 absolute bottom-8"
                    animation="translateX(-200px)"
                />
                <AnimatedImage
                    src="/leaf-4.png"
                    width={208}
                    height={468}
                    className="right-0 absolute top-24"
                    animation="translateX(200px)"
                />
                <div className="pt-20 pl-96">
                    <h5>calendar</h5>
                    <h1>event schedule</h1>
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
                <table className="text-primary-foreground border-separate border-spacing-y-12 px-40">
                    <thead>
                        <tr className="border">
                            <th>
                                <h3>Time</h3>
                            </th>
                            <th>
                                <h3>Artist</h3>
                            </th>
                            <th>
                                <h3>Label</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                        <tr className="border">
                            <td>
                                <h6>10:00AM : 12:00AM</h6>
                            </td>
                            <td>
                                <h4>Ashton Porter</h4>
                            </td>
                            <td>
                                <h4>The world of Blues</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="h-screen w-4/5 mx-auto grid grid-cols-2 py-40 gap-40">
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
            </div>
            <div className="relative">
                <AnimatedImage
                    src="/leaf-5.png"
                    width={176}
                    height={396}
                    className="left-0 absolute"
                    animation="translateX(-100px)"
                />
                <AnimatedImage
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
                        <Input
                            type="email"
                            placeholder="Enter your e-mail Address"
                            label="Subscribe"
                            icon="material-symbols:mail-outline"
                        ></Input>

                        <div className="flex gap-4 items-center mt-4">
                            <label className="label">
                                <input type="checkbox" />
                                <span className="text-primary ml-4 font-[roboto-serif]">
                                    I agree to the privacy policy
                                </span>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax
                bgImage="festival-banner.png"
                bgImageAlt="banner festival"
                strength={300}
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
            <div className="relative">
                <AnimatedImage
                    src="/leaf-7.png"
                    width={267}
                    height={709}
                    className="right-0 absolute top-20"
                    animation="translateX(200px)"
                />
                <div className="w-3/5 mx-auto mt-40">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <div className="relative w-[20rem] ml-40 ">
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
                                <h5>Who we are</h5>
                                <h1>
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
            </div>
            <Footer />
        </div>
    );
}

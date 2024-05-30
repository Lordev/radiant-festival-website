"use client";
import React from "react";
import { PropsWithChildren, useState } from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IconFacebook, IconInstagramRound, IconYouTube } from "../svg/index";
import { artistSlidesData } from "@/lib/data/artistSlides";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SliderContainer({ children }: PropsWithChildren) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // State to hold the current slide index

    const handleSlideChange = (swiper: any) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    const buttonStyling =
        "w-10 h-10 cursor-pointer block relative transition-transform duration-2500";

    const slidesStyling = "flex flex-row px-10 lg:px-0 lg:mb-16";

    return (
        <>
            <div className="xs:max-w-96 w-full order-2 mt-32 lg:order-1 mx-auto lg:m-0 ">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={800}
                    loop={true}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    className="relative"
                    id="artist-slider"
                >
                    {artistSlidesData.map((item, index) => (
                        <SwiperSlide key={item.artist} className={slidesStyling}>
                            <div className="">
                                <Image
                                    className=""
                                    src={item.imgUrl}
                                    alt="slide-img"
                                    width={456}
                                    height={517}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="absolute bottom-1/2 translate-y-1/2 flex justify-between w-full lg:w-fit z-20 lg:gap-8 lg:bottom-2">
                        <div
                            className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
                        ></div>
                        <div
                            className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
                        ></div>
                    </div>
                </Swiper>
            </div>
            <div className="flex gap-8 order-1 lg:order-2 mx-auto lg:m-0 lg:flex-row flex-col items-center lg:items-start max-lg:text-center">
                <div className="flex flex-col px-5 uppercase text-[#9E6C4D] gap-8 lg:mt-20">
                    <div className="w-40 h-20 relative">
                        <div className="w-full text-4xl font-bold transition-opacity duration-500 transform hover:opacity-100">
                            Artist{" "}
                        </div>
                        {artistSlidesData.map((slide, index) => (
                            <div
                                key={slide.artist}
                                className={`transition-opacity duration-700 transform absolute w-full text-base font-medium ${currentSlideIndex === index ? "opacity-100" : "opacity-0"}`}
                            >
                                {slide.artist}
                            </div>
                        ))}
                    </div>
                    <div className="flex lg:flex-col gap-4 justify-center lg:justify-start">
                        <a href={artistSlidesData[currentSlideIndex].facebookUrl}>
                            <IconFacebook
                                width={35}
                                height={35}
                                className="text-secondary-foreground
                            hover:text-accent-tertiary"
                            />
                        </a>
                        <a href={artistSlidesData[currentSlideIndex].youtubeUrl}>
                            <IconYouTube
                                width={35}
                                height={35}
                                className="text-secondary-foreground hover:text-accent"
                            />
                        </a>
                        <a href={artistSlidesData[currentSlideIndex].instagramUrl}>
                            <IconInstagramRound
                                width={35}
                                height={35}
                                className="text-secondary-foreground hover:text-accent-secondary"
                            />
                        </a>
                    </div>
                </div>
                <div className="relative w-80">
                    {artistSlidesData.map((slide, index) => (
                        <p
                            key={slide.artist}
                            className={`absolute inset-0 lg:mt-20 transition-opacity duration-700 ${currentSlideIndex === index ? "opacity-100" : "opacity-0"}`}
                        >
                            {slide.description}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

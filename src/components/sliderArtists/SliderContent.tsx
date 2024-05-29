import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { artistSlides } from "../../lib/data/artistSlides";

export default function SliderContent() {
    const slides = "flex flex-row px-10 lg:px-0 lg:mb-16";

    if (!artistSlides) return;

    return (
        <>
            {artistSlides.map((item, index) => (
                <SwiperSlide key={item.artist} className={`custom-slide ${slides}`}>
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
        </>
    );
}

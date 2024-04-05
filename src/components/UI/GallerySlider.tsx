"use client";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider() {
    const buttonStyling =
        "text-white w-10 h-10 absolute cursor-pointer block transition-transform duration-2500";

    const slideContainer = "text-center mb-16 overflow-hidden";

    const slides =
        "object-fit h-full w-full hover:scale-105 transform-translate duration-500 ease-in-out";

    return (
        <Swiper
            modules={[Navigation, A11y, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            speed={800}
            loop={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            className="relative"
            id="gallery-slider"
        >
            <SwiperSlide className={` custom-slide ${slideContainer}`}>
                <Image
                    src="/gallery-img1.png"
                    alt="club photo"
                    className={slides}
                    height={641}
                    width={912}
                />
            </SwiperSlide>
            <SwiperSlide className={` custom-slide ${slideContainer}`}>
                <Image
                    src="/gallery-img2.png"
                    alt="club photo"
                    className={slides}
                    height={641}
                    width={912}
                />
            </SwiperSlide>
            <SwiperSlide className={` custom-slide ${slideContainer}`}>
                <Image
                    src="/gallery-img3.png"
                    alt="club photo"
                    className={slides}
                    height={641}
                    width={912}
                />
            </SwiperSlide>
            <SwiperSlide className={` custom-slide ${slideContainer}`}>
                <Image
                    src="/gallery-img3.png"
                    alt="club photo"
                    className={slides}
                    height={641}
                    width={912}
                />
            </SwiperSlide>

            <div className="absolute left-0 bottom-1/2">
                <div
                    className={`custom-prev swiper-button-prev hover:-translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
            <div className="absolute right-0 bottom-1/2">
                <div
                    className={`custom-next swiper-button-next hover:translate-x-0.5 ${buttonStyling}`}
                ></div>
            </div>
        </Swiper>
    );
}

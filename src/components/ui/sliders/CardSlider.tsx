"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

interface CardSliderProps {
    className?: string;
}

export default function CardSlider({ className }: CardSliderProps) {
    const textStyle =
        "text-black font-semibold text-[40px] font-[kumbhsans] uppercase select-none";

    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            slidesPerView={3}
            freeMode={{
                enabled: true,
                momentum: false,
            }}
            speed={5000}
            loop={true}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,
            }}
            className={`bg-white ${className}`}
            id="card-slider"
            grabCursor={false}
            allowTouchMove={false}
            noSwiping={true}
        >
            <SwiperSlide className={`custom-slide`}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
        </Swiper>
    );
}

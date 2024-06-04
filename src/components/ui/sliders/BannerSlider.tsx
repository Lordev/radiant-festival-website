import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface BannerSliderProps {
    id: string;
    className?: string;
}

export default function BannerSlider({ className, id }: BannerSliderProps) {
    const [swiperLoaded, setSwiperLoaded] = useState(false);

    const handleLoad = () => {
        setSwiperLoaded(true);
    };

    const textStyle =
        "text-black font-semibold text-[50px] font-[kumbhsans] uppercase select-none ";

    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            slidesPerView={6}
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
            id={id}
            grabCursor={false}
            allowTouchMove={false}
            noSwiping={true}
            className={`relative bg-white  ${className} ${swiperLoaded ? "block" : "invisible "}`}
            onInit={() => handleLoad()}
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
            <SwiperSlide className={`custom-slide `}>
                <div className={textStyle}>Check it out</div>
            </SwiperSlide>
        </Swiper>
    );
}

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconFacebook from "../Svg/IconFacebook";
import IconInstagramRound from "../Svg/IconInstagramRound";
import IconYouTube from "../Svg/IconYouTube";

export default function ArtistSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // State to hold the current slide index
    const slidesContent = [
        {
            artist: "Mark the Twinley",
            imgUrl: "/artist-1.png",
            facebookUrl: "#",
            youtubeUrl: "#",
            instagramUrl: "#",
            description:
                "Mark the Twinley is an innovative artist known for blending traditional techniques with modern styles. His works often explore themes of nature and urban life, creating a captivating contrast that draws viewers in. With a career spanning over a decade, Mark continues to push the boundaries of artistry.",
        },
        {
            artist: "Rogue Wave",
            imgUrl: "/artist-2.png",
            facebookUrl: "#",
            youtubeUrl: "#",
            instagramUrl: "#",
            description:
                "Rogue Wave is a dynamic duo known for their electrifying performances and experimental sound. Combining elements of rock, electronic, and indie  music, they have carved a unique niche in the music scene. Fans describe their music as a journey through the depths of emotion, with each song leaving a lasting impact.",
        },
        {
            artist: "Solar Flare",
            imgUrl: "/artist-3.png",
            facebookUrl: "#",
            youtubeUrl: "#",
            instagramUrl: "#",
            description:
                "Solar Flare is a visionary artist who uses vibrant colors and bold strokes to create mesmerizing works of art. Her pieces often explore themes of spirituality and inner reflection, inviting viewers to delve into the depths of their own consciousness. With a dedicated following, Solar Flare's art continues to inspire and captivate audiences worldwide.",
        },
        {
            artist: "Luna Skyler",
            imgUrl: "/artist-4.png",
            facebookUrl: "#",
            youtubeUrl: "#",
            instagramUrl: "#",
            description:
                "Luna Skyler is a rising star in the world of fashion design, known for her eclectic style and avant-garde creations. Drawing inspiration from nature, mythology, and the cosmos, Luna's designs are a fusion of the ethereal and the modern. With each collection, she pushes the boundaries of fashion, creating wearable works of art.",
        },
    ];

    const handleSlideChange = (swiper: any) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    const buttonStyling =
        "w-10 h-10 cursor-pointer block relative transition-transform duration-2500";
    const slides = "flex flex-row px-10 lg:px-0 lg:mb-16";

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
                    {slidesContent.map((item, index) => (
                        <SwiperSlide
                            key={item.artist}
                            className={`custom-slide ${slides}`}
                        >
                            <Image
                                className=""
                                src={item.imgUrl}
                                alt="slide-img"
                                width={456}
                                height={517}
                            />
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
            <div className="flex gap-8 order-1 lg:order-2 mx-auto lg:m-0 lg:flex-row flex-col items-center lg:items-start text-center">
                <div className="flex flex-col px-5 uppercase text-[#9E6C4D] gap-8 lg:mt-20">
                    <div className="w-40 h-20 relative">
                        <div className="w-full text-4xl font-bold transition-opacity duration-500 transform hover:opacity-100">
                            Artist{" "}
                        </div>
                        {slidesContent.map((slide, index) => (
                            <div
                                key={slide.artist}
                                className={`transition-opacity duration-700 transform absolute w-full text-base font-medium ${currentSlideIndex === index ? "opacity-100" : "opacity-0"}`}
                            >
                                {slide.artist}
                            </div>
                        ))}
                    </div>
                    <div className="flex lg:flex-col gap-4 justify-center lg:justify-start">
                        <a href={slidesContent[currentSlideIndex].facebookUrl}>
                            <IconFacebook
                                width={35}
                                height={35}
                                className="text-secondary-foreground
                            hover:text-accent-tertiary"
                            />
                        </a>
                        <a href={slidesContent[currentSlideIndex].youtubeUrl}>
                            <IconYouTube
                                width={35}
                                height={35}
                                className="text-secondary-foreground hover:text-accent"
                            />
                        </a>
                        <a href={slidesContent[currentSlideIndex].instagramUrl}>
                            <IconInstagramRound
                                width={35}
                                height={35}
                                className="text-secondary-foreground hover:text-accent-secondary"
                            />
                        </a>
                    </div>
                </div>
                <div className="relative w-80">
                    {slidesContent.map((slide, index) => (
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

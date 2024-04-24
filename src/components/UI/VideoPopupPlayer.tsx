import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useScreenBreakPoint } from "@/context/useContextScreenBreakPoints";

export default function VideoPopUpPlayer({}) {
    const [open, setOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const { smallMobile, mobile, tablet } = useScreenBreakPoint();

    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayButtonClick = () => {
        !open && setOpen(true);
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            if (video.paused) {
                video.play();
            }
        }
    };

    const mobileLandScape = isRotated && (smallMobile || mobile || tablet);

    useEffect(() => {
        const isLandscape = window.innerWidth > window.innerHeight;
        setIsRotated(isLandscape);

        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [open, isRotated]);

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => handlePlayButtonClick()}>
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
                    <circle cx="51.5" cy="51.5" r="50" stroke="#FECB00" strokeWidth="3" />
                </svg>
            </div>
            <div
                className={`fixed bg-black/75 h-full w-full z-50 inset-0 transition-all delay-100 duration-300 ${!open ? "invisible" : "visible"}`}
            >
                <Icon
                    icon={"material-symbols:close"}
                    width={50}
                    height={50}
                    onClick={() => setOpen(!open)}
                    color="var(--foreground)"
                    className="text-secondary-foreground  absolute  right-0 top-4 lg:right-7 lg:top-10 opacity-100 z-50 w-[45px] lg:w-[50px] cursor-pointer"
                />
                <div
                    className={`relative h-full w-full flex justify-center items-center transition-opacity delay-100 duration-300 ${open ? "opacity-100" : "opacity-0"}`}
                >
                    <video
                        ref={videoRef}
                        className={`object-cover ${mobileLandScape ? "h-screen w-full" : "max-h-[75vh] px-8"}`}
                        controls
                        controlsList="nofullscreen nodownload"
                        src="/party-video.mp4"
                    ></video>
                </div>
            </div>
        </div>
    );
}

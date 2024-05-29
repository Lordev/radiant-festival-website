"use client";
import { useScreenBreakPoint } from "@/lib/context/useContextScreenBreakPoints";

export default function InfiniteSlider() {
    const { smallMobile, mobile, tablet } = useScreenBreakPoint();

    //*text limit ~25/30
    const slides = [
        { content: "Our Event is wonderful-", id: 1 },
        { content: "Our Event is wonderful-", id: 2 },
        { content: "Our Event is wonderful-", id: 3 },
    ];

    const slidesCopy = [
        { content: "Our Event is wonderful-", id: 4 },
        { content: "Our Event is wonderful-", id: 3 },
        { content: "Our Event is wonderful-", id: 5 },
    ];

    const textSizes =
        "4xl:text-2xl 3xl:text-xl 2xl:text-lg xl:text-normal lg:text-normal md:text-[14px] sm:text-[14px] py-2";

    return (
        <div className="bg-white py-1 overflow-hidden h-full min-[280px]:block hidden font-krona-one">
            <div className="overflow-hidden py-1 rounded">
                <div className="slider whitespace-nowrap">
                    <div className="w-full inline-block ">
                        <div
                            className={`uppercase text-[black] font-medium inline-block w-[calc(100%/2)] lg:w-[calc(100%/3)] slide-animation ${textSizes}
                                `}
                        >
                            {slides[0].content}
                        </div>
                        {!smallMobile && !mobile && !tablet && (
                            <div
                                className={`uppercase text-[black] font-medium inline-block w-[calc(100%/2)] lg:w-[calc(100%/3)] slide-animation ${textSizes}
                                `}
                            >
                                {slides[1].content}
                            </div>
                        )}
                        {!smallMobile && !mobile && (
                            <div
                                className={`uppercase text-[black] font-medium inline-block w-[calc(100%/2)] lg:w-[calc(100%/3)] slide-animation ${textSizes}
                                `}
                            >
                                {slides[2].content}
                            </div>
                        )}
                    </div>
                    <div className="w-full inline-block ">
                        <div
                            className={`uppercase text-[black] font-medium inline-block w-[calc(100%/2)] lg:w-[calc(100%/3)] slide-animation ${textSizes}
                            `}
                        >
                            {slidesCopy[0].content}
                        </div>
                        {!smallMobile && !mobile && !tablet && (
                            <div
                                className={`uppercase text-[black] font-medium inline-block w-[calc(100%/3)] slide-animation ${textSizes}
                                `}
                            >
                                {slidesCopy[2].content}
                            </div>
                        )}
                        {!smallMobile && !mobile && (
                            <div
                                className={`uppercase text-[black] font-medium inline-block w-[calc(100%/3)] slide-animation ${textSizes}
                            `}
                            >
                                {slidesCopy[1].content}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

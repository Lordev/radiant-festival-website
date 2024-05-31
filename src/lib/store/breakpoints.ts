import { create } from "zustand";

interface BreakpointsState {
    largeDesktop: boolean;
    mediumDesktop: boolean;
    smallDesktop: boolean;
    laptop: boolean;
    largeTablet: boolean;
    tablet: boolean;
    mobile: boolean;
    smallMobile: boolean;
    initializeBreakpoints: () => () => void; // Adjust return type
}

const useBreakpointsStore = create<BreakpointsState>((set) => {
    const setBreakpoints = (width: number) => {
        set({
            largeDesktop: width >= 2000,
            mediumDesktop: width >= 1800 && width < 2000,
            smallDesktop: width >= 1536 && width < 1800,
            laptop: width >= 1280 && width < 1536,
            largeTablet: width >= 1024 && width < 1280,
            tablet: width >= 640 && width < 1024,
            mobile: width >= 480 && width < 640,
            smallMobile: width < 480,
        });
    };

    return {
        largeDesktop: false,
        mediumDesktop: false,
        smallDesktop: false,
        laptop: false,
        largeTablet: false,
        tablet: false,
        mobile: false,
        smallMobile: false,
        initializeBreakpoints: () => {
            const handleResize = () => {
                setBreakpoints(window.innerWidth);
            };

            handleResize(); // Set initial state
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        },
    };
});

export default useBreakpointsStore;

"use client";
import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";

// Define the Menu Context type
export interface ScreenContextType {
    largeDesktop: boolean;
    mediumDesktop: boolean;
    smallDesktop: boolean;
    laptop: boolean;
    tablet: boolean;
    mobile: boolean;
    smallMobile: boolean;
}

// Create the Context
const ScreenBreakPointContext = createContext<ScreenContextType | undefined>(undefined);

// Custom hook to use the Menu Context
export const useScreenBreakPoint = (): ScreenContextType => {
    const context = useContext(ScreenBreakPointContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

// Menu Provider Component
export default function ScreenBreakPointProvider({ children }: PropsWithChildren) {
    const [largeDesktop, setLargeDesktop] = useState(false);
    const [mediumDesktop, setMediumDesktop] = useState(false);
    const [smallDesktop, setSmallDesktop] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [smallMobile, setSmallMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setLargeDesktop(width >= 2000);
            setMediumDesktop(width >= 1800 && width < 2000);
            setSmallDesktop(width >= 1536 && width < 1800);
            setLaptop(width >= 1280 && width < 1536);
            setTablet(width >= 1024 && width < 1280);
            setMobile(width < 1024);
            setSmallMobile(width < 640);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const screenState: ScreenContextType = {
        largeDesktop,
        mediumDesktop,
        smallDesktop,
        laptop,
        tablet,
        mobile,
        smallMobile,
    };

    return (
        <ScreenBreakPointContext.Provider value={screenState}>
            {children}
        </ScreenBreakPointContext.Provider>
    );
}

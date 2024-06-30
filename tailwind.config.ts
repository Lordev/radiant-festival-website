import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        fontFamily: {
            "krona-one": "var(--font-krona-one)",
            "kumbh-sans": "var(--font-kumbh-sans)",
            "roboto-serif": "var(--font-roboto-serif)",
            inter: "var(--font-inter)",
        },
        fontSize: {
            xs: ["12px", "14px"],
            sm: ["14px", "16px"],
            normal: ["16px", "18px"],
            lg: ["20px", "28px"],
            xl: ["24px", "32px"],
            "2xl": ["28px", "35px"],
            "3xl": ["35px", "39px"],
            "4xl": ["38px", "43px"],
            "5xl": ["42px", "46px"],
            "6xl": ["46px", "50px"],
            "7xl": ["50px", "54px"],
            "8xl": ["55px", "60px"],
            "9xl": ["70px", "85px"],
            "10xl": ["80px", "90px"],
        },
        screens: {
            "2xs": "360px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1800px",
            "4xl": "2000px",

            // IF CHANGES: ALSO CHANGE UseScreenBreakPoints.tsx
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xs": "360px",
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1800px",
                "4xl": "2000px",
            },
        },
        extend: {
            backgroundImage: {
                hero: "url('/Hero@1600w.jpg')",
                banner: "url('/banner-festival.png')",
            },

            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    secondary: "var(--accent-secondary)",
                    tertiary: "var(--accent-tertiary)",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "var(--card)",
                    dark: "var(--card-dark)",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "slide-down": {
                    from: { transform: "translateY(-100%)" },
                    to: { transform: "translateY(0)" },
                },
                "slide-up": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(-100%)" },
                },
                "slide-bottom": {
                    from: { transform: "translateY(100%)" },
                    to: { transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "spin-slow": "spin 10s linear infinite",
                "slide-down": "slide-down .1s ease-out",
                "slide-up": "slide-up .3s forwards ease-in",
                "slide-bottom": "slide-bottom .3s forwards ease-in",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

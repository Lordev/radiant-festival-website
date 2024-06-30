import type { Metadata } from "next";
import { Inter, Kumbh_Sans, Roboto_Serif, Krona_One } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/lib/context";
import Footer from "../components/footer/Footer";
import Header from "@/components/header";
import NavMenu from "../components/menu/NavMenu";
import ShopLayout from "@/components/shop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kumbhSans = Kumbh_Sans({ subsets: ["latin"], variable: "--font-kumbh-sans" });
const robotoSerif = Roboto_Serif({ subsets: ["latin"], variable: "--font-roboto-serif" });
const kronaOne = Krona_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-krona-one",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description:
        "Gemongodb+srv://LorDev:<password>@cluster0.y3fkuj3.mongodb.net/nerated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                ${kumbhSans.variable} 
                ${robotoSerif.variable}                    
                ${inter.variable} 
                ${kronaOne.variable}
                font-robotoSerif
                `}
            >
                <ContextProvider>
                    <NavMenu />
                    <Header />
                    <ShopLayout />
                    {children}
                    <Footer />
                </ContextProvider>
            </body>
        </html>
    );
}

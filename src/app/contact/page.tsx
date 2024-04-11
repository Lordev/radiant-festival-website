"use client";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import FormFieldContact from "@/components/UI/FormFieldContact";

export default function Contact() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-20% to-60% overflow-hidden">
            <div className="pt-64 pb-40 text-center">
                <h2>Contact</h2>
            </div>
            <div
                className="h-[40rem]
                w-full"
            >
                <Image
                    src={"/map-placeholder.png"}
                    width={2300}
                    height={529}
                    alt="map-placeholder"
                    className="w-full"
                />
            </div>
            <div className="w-3/5 mx-auto grid grid-cols-[1fr_2fr] gap-20 my-40 ">
                <div>
                    <div className="*:mb-8">
                        <h5 className="text-secondary-foreground">Any Questions</h5>
                        <h1 className="text-secondary-foreground">
                            Any Questions? Get in Touch!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 *:flex *:items-center *:gap-4">
                        <div>
                            <Icon
                                icon={"ph:map-pin-fill"}
                                width={40}
                                className="text-black "
                            />
                            <p> 785 15h Street, Office 478 Berlin</p>
                        </div>
                        <div>
                            <Icon
                                icon={"icomoon-free:mobile"}
                                width={40}
                                className="text-black "
                            />
                            <p>+1 840 841 25 69</p>
                        </div>
                        <div>
                            <Icon
                                icon={"material-symbols:mail"}
                                width={35}
                                className="text-black "
                            />
                            <p>info@email.comn</p>
                        </div>
                    </div>
                </div>
                <FormFieldContact />
            </div>
        </div>
    );
}

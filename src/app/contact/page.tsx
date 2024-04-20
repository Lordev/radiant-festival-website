"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import FormFieldContact from "@/components/UI/FormFieldContact";
import Map from "@/components/UI/Map";
import Container from "@/components/UI/Container";

export default function Contact() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-10% sm:from-15% md:from-15% lg:from-20% to-40% sm:to-50% lg:to-60% xl:to-65% overflow-hidden">
            <div className="lg:pt-64 pt-28 pb-40 text-center">
                <h2>Contact</h2>
            </div>
            <div className="w-40rem">
                {/* <Image
                    src={"/map-placeholder.png"}
                    width={2300}
                    height={529}
                    alt="map-placeholder"
                    className="w-full"
                /> */}
                <div className="bg-foreground w-full h-[30rem]">
                    <Map />
                </div>
            </div>
            <Container>
                <div className="grid sm:grid-cols-[1fr_2fr] gap-20  sm:mt-40 mt-40 mb-40 px-4 grid-rows-[repeat(auto,_2)] sm:grid-rows-none">
                    <div>
                        <div className="*:mb-8">
                            <h5 className="text-secondary-foreground">Any Questions</h5>
                            <h1 className="text-secondary-foreground">
                                Any Questions? Get in Touch!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate
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
            </Container>
        </div>
    );
}

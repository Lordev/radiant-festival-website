import Container from "@/components/ui/Container";
import FormFieldContact from "@/components/ui/FormFieldContact";
import Icon from "@iconify/react";

export default function ContactForm() {
    return (
        <Container>
            <div className="grid sm:grid-cols-[1fr_2fr] gap-20  sm:mt-40 mt-40 mb-40 px-4 grid-rows-[repeat(auto,_2)] sm:grid-rows-none">
                <div>
                    <div className="sm:*:mb-8 *:mb-6">
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
                        {/* <div>
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
                            </div> */}
                    </div>
                </div>
                <FormFieldContact />
            </div>
        </Container>
    );
}

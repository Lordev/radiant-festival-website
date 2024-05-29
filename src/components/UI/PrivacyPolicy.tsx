"use client";
import Modal from "react-modal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useModal } from "@/lib/context/useContextModal";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PrivacyPolicy() {
    const { isModalOpen, closeModal } = useModal();

    return (
        <div className="z-50">
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                preventScroll
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        width: "90vw",
                        maxWidth: "1000px",
                        height: "90vh",
                        zIndex: 505,
                        backgroundColor: "#fff",
                    },
                    overlay: {
                        zIndex: 70,
                        background: "rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <Icon
                    icon={"material-symbols:close"}
                    width={50}
                    height={50}
                    onClick={closeModal}
                    color="var(--primary-foreground)"
                    className="absolute  right-4 top-2 lg:right-7 lg:top-5 opacity-100 z-50 w-[25px] lg:w-[35px] cursor-pointer"
                />
                <div className="py-20 w-4/5 mx-auto text-primary-foreground">
                    <h2 className="text-center">Privacy Policy</h2>
                    <Accordion type="multiple" className="mt-16">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1. Information We Collect</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    <strong>Personal Information:</strong> We may collect
                                    personal information such as your name, email address,
                                    postal address, phone number, and payment information
                                    when you interact with our website or services.
                                </p>
                                <p>
                                    <strong>Usage Information:</strong> We automatically
                                    collect information about your interaction with our
                                    website, including your IP address, browser type,
                                    operating system, and pages visited.
                                </p>
                                <p>
                                    <strong>Cookies:</strong> We use cookies and similar
                                    tracking technologies to enhance your experience on
                                    our website and to collect data about how you use our
                                    services.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                2. How We Use Your Information
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We may use your personal information to provide and
                                    improve our services, communicate with you, process
                                    transactions, and personalize your experience.
                                </p>
                                <p>
                                    We may use usage information to analyze trends,
                                    administer the website, track users movements around
                                    the website, and gather demographic information.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>3. Information Sharing</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We may share your personal information with
                                    third-party service providers who assist us in
                                    operating our website and providing our services.
                                </p>
                                <p>
                                    We may also share your information in response to
                                    legal requests, to protect our rights or property, or
                                    to prevent illegal activities.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>4. Data Security</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We implement security measures to protect your
                                    personal information against unauthorized access,
                                    alteration, disclosure, or destruction.
                                </p>
                                <p>
                                    However, no method of transmission over the internet
                                    or electronic storage is 100% secure, and we cannot
                                    guarantee absolute security.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>5. Your Choices</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    You may choose not to provide certain personal
                                    information, but this may limit your ability to use
                                    certain features of our website or services.
                                </p>
                                <p>
                                    You can manage your cookie preferences through your
                                    browser settings or by opting out of certain
                                    third-party tracking technologies.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger>6. Updates to This Policy</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We may update this Privacy Policy from time to time by
                                    posting the revised version on our website. The
                                    changes will be effective immediately upon posting.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger>7. Contact Us</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    If you have any questions or concerns about this
                                    Privacy Policy or our privacy practices, please
                                    contact us at{" "}
                                    <a href="mailto:contact@yourcompany.com">
                                        contact@yourcompany.com
                                    </a>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Modal>
        </div>
    );
}

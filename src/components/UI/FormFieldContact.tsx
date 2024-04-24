import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Modal from "react-modal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion";
export default function FormFieldContact() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [checkbox, setCheckbox] = useState(false);
    const [nameFilled, setNameFilled] = useState(false);
    const [numberFilled, setNumberFilled] = useState(false);
    const [emailFilled, setEmailFilled] = useState(false);
    const [textFilled, setTextFilled] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
        },
    };
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputPhoneNumber = event.target.value;

        // Remove all non-digit characters
        inputPhoneNumber = inputPhoneNumber.replace(/\D/g, "");

        // Parse the input as a phone number
        const parsedPhoneNumber = parsePhoneNumberFromString(inputPhoneNumber, "NL");

        // Format the phone number
        if (parsedPhoneNumber) {
            const formattedPhoneNumber = parsedPhoneNumber.formatNational();
            setPhoneNumber(formattedPhoneNumber);
        } else {
            setPhoneNumber(inputPhoneNumber);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if every form is filled in
        if (
            nameRef.current?.value ||
            numberRef.current?.value ||
            emailRef.current?.value ||
            textAreaRef.current?.value ||
            checkbox
        ) {
            if (nameRef.current?.value) setNameFilled(true);
            if (numberRef.current?.value) setNumberFilled(true);
            if (emailRef.current?.value) setEmailFilled(true);
            if (numberRef.current?.value) setTextFilled(true);
            if (!checkbox) alert("please agree to the privacy policy");
        }

        // Reset the form after submission and POST?
        if (nameFilled && numberFilled && emailFilled && textFilled && checkbox) {
            console.log("Form submitted!");
            console.log("Name:", nameRef.current?.value);
            console.log("Number:", numberRef.current?.value);
            console.log("Email:", emailRef.current?.value);
            console.log("Text:", textAreaRef.current?.value);

            alert(
                "Thank you for submitting you message, we'll try to respond as fast as possible"
            );

            setName("");
            setPhoneNumber("");
            setEmail("");
            setText("");
            setCheckbox(false);
        }
    };

    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };

    return (
        <form
            id="myForm"
            onSubmit={handleSubmit}
            className="lg:grid lg:grid-cols-2 gap-8 mt-10"
        >
            <div className="flex flex-col gap-8">
                <div>
                    <Input
                        type="text"
                        placeholder="Name"
                        icon="material-symbols:person"
                        iconPosition="left"
                        iconSize="lg"
                        iconColor="black"
                        ref={nameRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !name ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
                <div>
                    <Input
                        type="tel"
                        placeholder="(XX) XXXX-XXXX"
                        icon="ic:round-phone-in-talk"
                        iconPosition="left"
                        iconSize="lg"
                        iconColor="black"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        ref={numberRef}
                        autoComplete="tel"
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !phoneNumber ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        icon="mdi:email"
                        iconPosition="left"
                        iconSize="lg"
                        iconColor="black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        autoComplete="email"
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !email ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
            </div>
            <div className="flex flex-col mt-20 lg:mt-0">
                <div className="flex items-center gap-4">
                    <Icon
                        icon={"clarity:note-edit-line"}
                        width={40}
                        className="text-black"
                    />
                    <span className="text-primary-foreground font-[roboto-serif] text-[20px] font-extralight">
                        Message
                    </span>
                </div>
                <div>
                    <textarea
                        rows={13}
                        className="bg-transparent font-[roboto-serif] mt-4 w-full"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        ref={textAreaRef}
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !text ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
                <div className="flex gap-8 mt-4">
                    <Button
                        label="Send"
                        backgroundColor="var(--accent-secondary)"
                        textColor="white"
                        primary={true}
                        type="submit"
                        form="myForm"
                    />
                    <div className="flex gap-8 mt-4">
                        <div className="flex items-center relative">
                            <label className="label h-[25px] w-[25px]">
                                <input
                                    type="checkbox"
                                    onChange={handleCheckbox}
                                    checked={checkbox}
                                />
                                <span className="checkmark"></span>
                            </label>

                            <span
                                className="text-primary font-[roboto-serif] pl-4 cursor-pointer hover:text-primary-foreground flex items-center"
                                onClick={openModal}
                            >
                                I agree to the privacy policy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
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
                        zIndex: 500,
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
                    className="absolute  right-0 top-2 lg:right-7 lg:top-5 opacity-100 z-50 w-[25px] lg:w-[35px] cursor-pointer"
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
        </form>
    );
}

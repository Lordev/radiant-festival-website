import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function FormField() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [checkbox, setCheckbox] = useState(false);
    const [nameInput, setNameInput] = useState(false);
    const [numberInput, setNumberInput] = useState(false);
    const [emailInput, setEmailInput] = useState(false);
    const [textInput, setTextInput] = useState(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Here you can handle your form submission logic
        if (
            nameRef.current?.value ||
            numberRef.current?.value ||
            emailRef.current?.value ||
            textAreaRef.current?.value
        ) {
            if (!nameRef.current?.value) setNameInput(true);
            if (!numberRef.current?.value) setNumberInput(true);
            if (!emailRef.current?.value) setEmailInput(true);
            if (!numberRef.current?.value) setTextInput(true);
        }

        // Reset the form after submission
        if (nameInput && numberInput && emailInput && textInput) {
            console.log("Form submitted!");
            console.log("Name:", nameRef.current?.value);
            console.log("Number:", numberRef.current?.value);
            console.log("Email:", emailRef.current?.value);
            console.log("Text:", textAreaRef.current?.value);

            setName("");
            setNumber("");
            setEmail("");
            setText("");
        }
    };

    const handleCheckbox = () => {
        setCheckbox(true);
    };

    const handleButton = () => {
        if (!checkbox) alert("please agree to the privacy policy");
    };

    return (
        <form
            id="myForm"
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-20 mt-10"
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
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !name ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
                <div>
                    <Input
                        type="number"
                        placeholder="Number"
                        icon="ic:round-phone-in-talk"
                        iconPosition="left"
                        iconSize="lg"
                        iconColor="black"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        ref={numberRef}
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !number ? "" : "invisible"}`}
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
                    />
                    <span
                        className={`text-red-500 font-[roboto-serif] ${checkbox && !email ? "" : "invisible"}`}
                    >
                        The field is required
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
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
                        cols={80}
                        rows={10}
                        className="bg-transparent font-[roboto-serif] mt-4"
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
                        onClick={handleButton}
                    />
                    <div className="flex flex-col items-center mt-4">
                        <label className="label">
                            <input type="checkbox" required onClick={handleCheckbox} />
                            <span className="text-primary-foreground ml-2 font-[roboto-serif]">
                                I agree to the privacy policy
                            </span>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

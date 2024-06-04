"use client";
import Input from "./Input";
import { useRef, useState } from "react";
import { useModal } from "@/lib/context/useContextModal";

export default function SubscribeForm({}) {
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);
    const { openModal } = useModal();

    const handleCheckbox = () => {
        if (!checkbox) setCheckbox(true);
        else if (checkbox) setCheckbox(false);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (!checkbox) alert("please agree to the privacy policy");

        console.log("subscription successful");
        setEmail("");
        setCheckbox(false);
    };

    return (
        <form>
            <Input
                type="email"
                placeholder="Enter your e-mail Address"
                icon="mdi:email"
                label="Subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                autoComplete="email"
                onButtonClick={handleSubmit}
            />
            <span
                className={`text-red-500 font-[roboto-serif] ${checkbox && !email ? "" : "invisible"}`}
            >
                The field is required
            </span>
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

            <button></button>
        </form>
    );
}

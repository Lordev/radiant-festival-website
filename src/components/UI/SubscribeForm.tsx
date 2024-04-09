import Input from "./Input";
import { useRef, useState } from "react";

export default function SubscribeForm({}) {
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);

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
            <div className="flex gap-4 items-center mt-1">
                <label className="label">
                    <input
                        type="checkbox"
                        required
                        onChange={handleCheckbox}
                        checked={checkbox}
                    />
                    <span className="text-primary ml-4 font-[roboto-serif]">
                        I agree to the privacy policy
                    </span>
                    <span className="checkmark"></span>
                </label>
            </div>
            <button></button>
        </form>
    );
}

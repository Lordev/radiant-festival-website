import React, { useEffect, useState } from "react";

interface PaymentLinkProps {
    ticketsAmount: number;
}

const PaymentLink: React.FC<PaymentLinkProps> = ({ ticketsAmount }) => {
    const [paymentLink, setPaymentLink] = useState<string>("");

    useEffect(() => {
        async function createPaymentLink() {
            if (ticketsAmount > 0) {
                try {
                    const response = await fetch("/api/create-payment-link", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ ticketsAmount }),
                    });

                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }

                    const data = await response.json();
                    setPaymentLink(data.url);
                } catch (error) {
                    console.error("Error creating payment link:", error);
                }
            }
        }

        createPaymentLink();
    }, [ticketsAmount]);

    return <div>{paymentLink && <a href={paymentLink}>Pay Here</a>}</div>;
};

export default PaymentLink;

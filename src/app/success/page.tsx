import { IconCheckMark } from "@/components/svg";
import ButtonUnderlined from "@/components/ui/buttons/ButtonUnderlined";

export default function Success() {
    return (
        <div className="h-screen bg-gradient-to-b from-background via-accent-secondary to-background from-5%">
            <div className="flex items-center justify-center h-full w-full">
                <div className="px-20 bg-primary text-foreground text-center py-20 space-y-8">
                    <h1>Payment Successful!</h1>
                    <IconCheckMark className="mx-auto w-16 h-16 text-accent" />
                    <p className="text-foreground">
                        Thank you for your purchase. Your payment was successful.
                    </p>

                    <div className="mx-auto w-fit">
                        <ButtonUnderlined
                            label="Back to home"
                            link="/"
                            className="text-accent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

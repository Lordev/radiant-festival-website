import SubscribeForm from "@/components/ui/forms/SubscribeForm";
import PrivacyPolicy from "@/components/ui/modal/PrivacyPolicy";
import Image from "next/image";

export default function NewsletterSubscription() {
    return (
        <section className="relative lg:my-40 my-20">
            <Image
                src={"/newsletter-bg.png"}
                alt="newsletter"
                width={1317}
                height={369}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            />
            <div className="w[30rem] lg:w-[40rem] mx-auto relative  px-8">
                <SubscribeForm />
                <PrivacyPolicy />
            </div>
        </section>
    );
}

import Title from "@/components/ui/Title";
import dynamic from "next/dynamic";
import { ContactForm } from "@/components/sections/contact";
const Map = dynamic(() => import("@/components/sections/contact/Map"), {
    ssr: false,
    loading: () => (
        <section className="w-40rem pt-20 lg:pt-40">
            <div className="bg-transparent w-full h-[30rem]"></div>
        </section>
    ),
});

export default function Contact() {
    return (
        <main className="bg-gradient-to-b from-background via-accent-secondary to-background from-5% sm:from-10%  lg:from-20% to-40% sm:to-50% lg:to-60% xl:to-65% overflow-hidden">
            <Title title="Contact" />
            <Map />
            <ContactForm />
        </main>
    );
}

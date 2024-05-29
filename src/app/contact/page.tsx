import Title from "@/components/ui/Title";
import { ContactForm, Map } from "@/components/sections/contact";

export default function Contact() {
    return (
        <main className="bg-gradient-to-b from-background via-accent-secondary to-background from-5% sm:from-10%  lg:from-20% to-40% sm:to-50% lg:to-60% xl:to-65% overflow-hidden">
            <Title title="Contact" />
            <Map />
            <ContactForm />
        </main>
    );
}

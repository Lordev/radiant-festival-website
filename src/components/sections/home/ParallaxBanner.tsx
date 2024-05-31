import Parallax from "@/components/shared/Parallax";
import Image from "next/image";

export default function ParallaxBanner() {
    return (
        <section>
            <Parallax
                bgImage="festival-banner.png"
                bgImageAlt="banner festival"
                strength={300}
                className="w-full"
                bgImageSizes=""
                bgImageStyle={{ maxWidth: "none" }}
            >
                <div className="bg-cover bg-no-repeat h-[70vh]">
                    <div className="py-10 bg-[#E9E9E9] grid-flow-col grid justify-center">
                        <Image
                            src="/logo-1.png"
                            alt="logo label"
                            width={175}
                            height={150}
                        />
                        <Image
                            src="/logo-2.png"
                            alt="logo label"
                            width={175}
                            height={150}
                        />
                        <Image
                            src="/logo-3.png"
                            alt="logo label"
                            width={175}
                            height={150}
                        />
                        <Image
                            src="/logo-4.png"
                            alt="logo label"
                            width={175}
                            height={150}
                        />
                        <Image
                            src="/logo-5.png"
                            alt="logo label"
                            width={175}
                            height={150}
                        />
                    </div>
                </div>
            </Parallax>
        </section>
    );
}

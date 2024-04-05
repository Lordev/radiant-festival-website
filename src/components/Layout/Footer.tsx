import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="w-1/2 mx-auto pt-40">
                <div className="text-4xl font-medium text-foreground uppercase max-w-[490px]">
                    OuR music Festival is <br />
                    <span className="text-amber-200">the best of Europe</span>
                </div>
                <div className="flex justify-between mt-20">
                    <ul className="flex gap-12 text-white text-sm">
                        <a href="#">
                            <li className="uppercase">home</li>
                        </a>
                        <a href="#">
                            <li className="uppercase">contact</li>
                        </a>
                        <a href="#">
                            <li className="uppercase">news</li>
                        </a>
                        <a href="#">
                            <li className="uppercase">buy tickets</li>
                        </a>
                    </ul>
                    <div className="flex gap-4">
                        <a href="#" className="href">
                            <Image
                                src={"/facebook-icon-sm.png"}
                                width={22}
                                height={22}
                                alt="facebook icon"
                            />
                        </a>
                        <a href="#" className="href">
                            <Image
                                src={"/instagram-icon-sm.png"}
                                width={22}
                                height={22}
                                alt="instagram icon"
                            />
                        </a>
                        <a href="#" className="href">
                            <Image
                                src={"/twitter-icon-sm.png"}
                                width={22}
                                height={22}
                                alt="twitter icon"
                            />
                        </a>
                    </div>
                </div>
                <hr className="border-t-[1px] border-white mt-20" />
                <p className="pt-4 pb-16">Copyright by &copy; Musicfestival 2024</p>
            </div>
        </div>
    );
}

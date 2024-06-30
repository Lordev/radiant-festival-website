import Image from "next/image";
import IconInstagram from "../../svg/IconInstagram";
import IconTwitter from "../../svg/IconTwitter";

interface ArtistCardProps {
    artistName: string;
    role: string;
    imageUrl: string;
    igUrl: string;
    twitterUrl: string;
}

export default function ArtistCard({
    artistName,
    role,
    imageUrl,
    twitterUrl,
    igUrl,
}: ArtistCardProps) {
    return (
        <div className="w-fit">
            <Image
                src={imageUrl}
                width={426}
                height={453}
                alt={artistName}
                className="mb-4 rounded-sm"
            />
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <h4 className="text-primary">{artistName}</h4>
                    <h5 className="text-primary">{role}</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <a href={igUrl} target="_blank" rel="noopener noreferrer">
                        <IconInstagram className="w-6 h-6 text-black hover:text-accent-secondary transition-colors duration-100 ease-in" />
                    </a>
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <IconTwitter className="w-6 h-6 text-black hover:text-accent-secondary transition-colors duration-100 ease-in" />
                    </a>
                </div>
            </div>
        </div>
    );
}

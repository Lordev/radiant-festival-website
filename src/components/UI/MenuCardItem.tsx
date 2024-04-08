interface MenuCardItemProps {
    title: string;
    description: string;
    price: number;
    textColor?: "dark";
}

export default function MenuCardItem({
    title,
    description,
    price,
    textColor,
}: MenuCardItemProps) {
    let color = "";

    textColor === "dark"
        ? (color = "var(--secondary-foreground)")
        : (color = "var(--foreground)");

    return (
        <div
            className={`grid grid-cols-[auto_1fr_auto] gap-x-4 mt-10 items-end text-nowrap`}
        >
            <div>
                <h4 style={{ color }}>{title}</h4>
            </div>
            <div
                className="tracking-[3px] after:content-['.....................................................................'] overflow-hidden white-space-nowrap after:opacity-20"
                style={{ color }}
            ></div>
            <h4 className=" text-nowrap" style={{ color }}>
                ${price % 1 === 0 ? price.toFixed(0) + ".00" : price.toFixed(2)}
            </h4>
            <p>{description}</p>
        </div>
    );
}

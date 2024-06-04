interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <section className="pt-20 lg:pt-64 text-center">
            <h2>{title}</h2>
        </section>
    );
}

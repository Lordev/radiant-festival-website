import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren<{}>, React.HTMLProps<HTMLDivElement> {
    classNames?: string;
}

export default function Container({ className, children, ...props }: ContainerProps) {
    return (
        <section
            className={`relative lg:grid 3xl:grid-cols-[minmax(0,1fr)_minmax(0,110rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,80rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,62rem)_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_minmax(0,48rem)_minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_minmax(0,40rem)_minmax(0,1fr)] xs:grid-cols-[minmax(0,1fr)_minmax(0,30rem)_minmax(0,1fr)] justify-center
         ${className ?? ""}`}
            {...props}
        >
            <div className="col-start-2">{children}</div>
        </section>
    );
}

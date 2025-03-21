import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type ButtonProps = {
    link: LinkField;
    text: string | null;
    className?: string;
};

const Button = ({ link, text, className }: ButtonProps) => {
    return (
        <PrismicNextLink
            className={clsx(
                "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
                className,
            )}
            field={link}
        >
            {text}
        </PrismicNextLink>
    );
};

export default Button;

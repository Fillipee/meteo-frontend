type LinkProps = {
    children: React.ReactNode;
    href: string;
    active?: boolean;
};

export const Link = ({ children, href, active }: LinkProps) => {
    return (
        <a
            href={href}
            className={`text-primaryBlue-800 hover:text-primaryBlue-900 hover:font-bold ${
                active && "font-bold "
            }`}
        >
            {children}
        </a>
    );
};

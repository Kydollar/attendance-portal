import { ButtonProps } from "types/button";

export default function ButtonPrimary(props: ButtonProps) {
    const { onClick, children, inputClassName } = props;

    return (
        <button
            className={[
                "bg-blue-500 py-4 px-16 rounded-full text-sm text-white font-semibold tracking-wide subpixel-antialiased shadow-xl",
                inputClassName,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

import { ButtonProps } from "types/button";

export default function ButtonSecondary(props: ButtonProps) {
    const { onClick, children, inputClassName } = props;

    return (
        <button
            className={[
                "bg-green-500 py-4 px-16 rounded-full text-sm text-white font-semibold tracking-wide subpixel-antialiased shadow-xl",
                inputClassName,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

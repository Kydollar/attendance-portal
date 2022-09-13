import { ButtonProps } from "types/button";

export default function Button(props: ButtonProps) {
    const { onClick, children, inputClassName } = props;

    return (
        <button
            className={[
                "py-4 px-16 rounded-2xl text-sm text-white font-semibold tracking-wide subpixel-antialiased shadow-xl",
                inputClassName,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

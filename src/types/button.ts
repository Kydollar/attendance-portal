import { ReactNode } from "react";

export interface ButtonProps {
	onClick?: () => void;
	inputClassName?: string;
	children: ReactNode;
}

import { ButtonHTMLAttributes } from "react";

export type BaseButtonProps = {
  variant?: "text";
  fit?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "id">;

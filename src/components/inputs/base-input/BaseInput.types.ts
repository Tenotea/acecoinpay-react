import { InputHTMLAttributes } from "react";

export type BaseInputProps = {
  positionCenter?: boolean;
  icon?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

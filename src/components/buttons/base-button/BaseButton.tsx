import { BaseButtonProps } from "./BaseButton.types";
import "./BaseButton.scss";

export default function BaseButton(props: BaseButtonProps) {
  const { variant, fit, ...attrs } = props;
  return (
    <button
      id="base-button"
      className={variant + (fit ? " fit" : "")}
      {...attrs}
    ></button>
  );
}

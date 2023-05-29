import { Icon } from "@iconify/react/dist/iconify.js";
import "./BaseInput.scss";
import { BaseInputProps } from "./BaseInput.types";

export default function BaseInput(props: BaseInputProps) {
  const { positionCenter, icon, ...attrs } = props;
  return (
    <div id="base-input">
      <input
        className={"base-input--field" + (positionCenter ? " center" : "")}
        {...attrs}
      />
      {icon && (
        <Icon
          icon={"basil:apps-solid"}
          className="base-input--icon"
          width={23}
        />
      )}
    </div>
  );
}

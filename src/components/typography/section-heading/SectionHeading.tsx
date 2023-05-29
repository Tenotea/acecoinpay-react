import { SectionHeadingProps } from "./SectionHeading.types";
import "./SectionHeading.scss";

export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <div id="section-heading">
      <h4 className="section-heading--title">{props.title}</h4>
      <p className="section-heading--caption"> {props.caption} </p>
    </div>
  );
}

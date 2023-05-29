import "./CompanyLogo.scss";
import { IMG_CompanyLogo } from "../../../images";

export default function CompanyLogo() {
  return (
    <div id="company-logo">
      <img src={IMG_CompanyLogo} className="logo" />
    </div>
  );
}

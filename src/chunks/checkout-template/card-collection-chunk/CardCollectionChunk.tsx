import { Icon } from "@iconify/react/dist/iconify.js";
import BaseButton from "../../../components/buttons/base-button/BaseButton";
import Clock from "../../../components/misc/clock/Clock";
import CompanyLogo from "../../../components/misc/company-logo/CompanyLogo";
import SectionHeading from "../../../components/typography/section-heading/SectionHeading";
import "./CardCollectionChunk.scss";
import CardInput from "../../../components/inputs/card-input/CardInput";
import BaseInput from "../../../components/inputs/base-input/BaseInput";

export default function CardCollectionChunk() {
  return (
    <div id="card-collection-chunk">
      <div className="heading">
        <CompanyLogo />
        <Clock />
      </div>

      <section className="content-section">
        <div className="content-section__card-input">
          <div className="content-section__card-input--heading">
            <SectionHeading
              title={"Card Number"}
              caption={"Enter the 16-digit number on the card"}
            />
            <BaseButton variant="text" fit type="button">
              <Icon icon={"fluent:edit-16-filled"} />
              Edit
            </BaseButton>
          </div>
          <div className="content-section__card-input--container">
            <CardInput />
          </div>
        </div>

        <div className="content-section__grid-input">
          <SectionHeading
            title="CVV Number"
            caption="Enter 3 or 4 digit number on the card"
          />
          <BaseInput positionCenter icon />
        </div>
        <div className="content-section__grid-input">
          <SectionHeading
            title="Expiry Date"
            caption="Enter the expiration date of the card"
          />
          <div className="content-section__expiry-input">
            <BaseInput positionCenter />
            <span className="content-section__expiry-input--divider"> / </span>
            <BaseInput positionCenter />
          </div>
        </div>
        <div className="content-section__grid-input">
          <SectionHeading
            title="Password"
            caption="Enter your dynamic password"
          />
          <BaseInput type="password" icon />
        </div>
        <div className="content-section__button-container">
          <BaseButton>Pay Now</BaseButton>
        </div>
      </section>
    </div>
  );
}

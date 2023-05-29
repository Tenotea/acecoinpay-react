import { Icon } from "@iconify/react/dist/iconify.js";
import { IMG_SimComponent } from "../../../images";
import "./PaymentSummaryChunk.scss";
import BaseButton from "../../../components/buttons/base-button/BaseButton";

export default function PaymentSummaryChunk() {
  return (
    <div id="payment-summary-chunk">
      <div className="card-container">
        <hr className="card-container--holder" />
        <div className="card-container__card-details">
          <div className="card-container__icons-container">
            <img
              src={IMG_SimComponent}
              className="card-container__icons-container--sim-component"
            />
            <Icon icon={"lucide:wifi"} width={30} />
          </div>

          <div className="card-container__card-information">
            <h6 className="card-container__card-information--name">
              Jonathan Micheal
            </h6>
            <p className="card-container__card-information--card-number">
              <span> •••• </span> &nbsp;3456
            </p>
            <div className="card-container__card-information--expiry">
              <p className="value">09/22</p>

              <Icon
                icon={"logos:mastercard"}
                height={20}
                className="card-type"
              />
            </div>
          </div>
        </div>
        <div className="card-container__payment-summary">
          <div>
            <div className="card-container__payment-summary--summary-item">
              <h6 className="label"> Company </h6>
              <p className="value">
                <Icon icon={"typcn:vendor-apple"} width={25} className="icon" />
                Apple
              </p>
            </div>
            <div className="card-container__payment-summary--summary-item">
              <h6 className="label"> Order Number </h6>
              <p className="value">1266201</p>
            </div>
            <div className="card-container__payment-summary--summary-item">
              <h6 className="label"> Product </h6>
              <p className="value">Macbook Air</p>
            </div>
            <div className="card-container__payment-summary--summary-item">
              <h6 className="label"> VAT(20%) </h6>
              <p className="value">$200</p>
            </div>
          </div>

          <div className="card-container__payment-summary--card-charge">
            <div className="">
              <span className="label">You have to pay</span>
              <p className="amount">
                549<span className="cent">.99</span>&nbsp;
                <span className="currency">USD</span>
              </p>
            </div>
            <Icon icon={"ion:receipt-outline"} width={25} color="#7480a0" />
          </div>
        </div>

        <div className="card-container__actions">
          <BaseButton>Pay Now</BaseButton>
        </div>
      </div>
    </div>
  );
}

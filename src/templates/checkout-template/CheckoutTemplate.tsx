import { Icon } from "@iconify/react";
import "./CheckoutTemplate.scss";
import CardCollectionChunk from "../../chunks/checkout-template/card-collection-chunk/CardCollectionChunk";
import PaymentSummaryChunk from "../../chunks/checkout-template/payment-summary-chunk/PaymentSummaryChunk";

export default function CheckoutTemplate() {
  return (
    <main id="checkout-template">
      <div className="checkout-container">
        <div className="checkout-container--cancel-button">
          <Icon icon={"icon-park-outline:close"} width={16} />
        </div>
        <CardCollectionChunk />
        <PaymentSummaryChunk />
      </div>
    </main>
  );
}

import { ChangeEvent, useRef, useState } from "react";
import "./CardInput.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CardInput() {
  const [cardNumber, setCardNumber] = useState<Array<string>>(["", "", "", ""]);
  const cardSlotsRef = useRef<HTMLDivElement | null>(null);

  function handleInputChange(params: {
    index: number;
    event: ChangeEvent<HTMLInputElement>;
  }) {
    setCardNumber((cn) => {
      const _cn = cn.slice();
      const value = params.event.target.value;
      if (value.length <= 4) cn[params.index] = value;
      if (value.length >= 4 && params.index < cardNumber.length) {
        cardSlotsRef.current?.children
          .item(params.index + 1)
          ?.getElementsByTagName("input")[0]
          .focus();
      }
      return _cn;
    });
  }

  return (
    <div id="card-input">
      <Icon icon={"logos:mastercard"} height={25} className="card-type" />
      <div ref={cardSlotsRef} className="card-slots">
        {cardNumber.map((num, id) => (
          <div key={id} className="card-slots__item">
            <input
              type="text"
              value={num}
              className="card-slots__item--input"
              placeholder="0000"
              onChange={(e) =>
                handleInputChange({
                  index: id,
                  event: e,
                })
              }
            />
            {id < cardNumber.length - 1 && (
              <span className="card-slots__item--divider"> - </span>
            )}
          </div>
        ))}
      </div>
      <Icon
        icon={"material-symbols:verified-rounded"}
        width={25}
        className="status-badge"
      />
    </div>
  );
}

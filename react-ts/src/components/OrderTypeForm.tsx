import React, { useState } from "react";
import { OrderType } from "../state";
import { FancyRadio, FancyRadioContainer } from "./design/FancyRadio";

const orderTypeOptions: { [key in OrderType]: string } = {
  [OrderType.SCREENING]: "Chci se\nobjednat na vyšetření",
  [OrderType.PRESCRIPTION]: "Chci si\nobjednat recept",
};

const submitButtonLabel: { [key in OrderType]: string } = {
  [OrderType.SCREENING]: "K objednání vyšetření →",
  [OrderType.PRESCRIPTION]: "K objednání receptu →",
};

export function OrderTypeForm({
  initialOrderType,
  onSubmit,
}: {
  initialOrderType: OrderType;
  onSubmit: (orderType: OrderType) => void;
}) {
  const [orderType, setOrderType] = useState<OrderType>(initialOrderType);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(orderType);
      }}
    >
      <FancyRadioContainer>
        {Object.entries(orderTypeOptions).map(([optionOrderType, optionLabel]) => {
          const labelRows = optionLabel.split("\n");
          return (
            <FancyRadio
              key={optionOrderType}
              name="order-type"
              value={optionOrderType}
              checked={orderType == optionOrderType}
              onChange={() => setOrderType(optionOrderType as OrderType)}
            >
              {labelRows[0]}
              <br />
              <strong>{labelRows[1]}</strong>
            </FancyRadio>
          );
        })}
      </FancyRadioContainer>
      <div className="OrderTypeForm-cta">
        <button type="submit">{submitButtonLabel[orderType]}</button>
      </div>
    </form>
  );
}

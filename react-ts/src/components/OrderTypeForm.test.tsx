import { render, screen, fireEvent } from "@testing-library/react";
import { OrderTypeForm } from "./OrderTypeForm";
import { OrderType } from "../state";

// TODO: This checks the input[type="radio"],
// but since we use the FancyRadio, the actual visuals might differ,
// so we should check the if the corresponding label has the proper --selected class,
// because that is what the user sees.
// This could/should be covered (also) by a FancyRadio unit test.
function getSelectedOrderType(): OrderType {
  const radio: HTMLInputElement = screen.getByRole("radio", { checked: true });
  return radio.value as OrderType;
}

function getCtaButton() {
  return screen.getByRole<HTMLButtonElement>("button"); // , { name: /K objednání/i }
}

// array of [initialOrderType, selectingOptionByText, expectingSelectedOrderType]
const flowData: [OrderType, string | null, OrderType][] = [
  [OrderType.PRESCRIPTION, "objednat na vyšetření", OrderType.SCREENING],
  [OrderType.SCREENING, "objednat na vyšetření", OrderType.SCREENING],
  [OrderType.SCREENING, null, OrderType.SCREENING],
  [OrderType.PRESCRIPTION, "objednat recept", OrderType.PRESCRIPTION],
  [OrderType.SCREENING, "objednat recept", OrderType.PRESCRIPTION],
  [OrderType.PRESCRIPTION, null, OrderType.PRESCRIPTION],
];

const buttonLabel = {
  [OrderType.SCREENING]: "K objednání vyšetření",
  [OrderType.PRESCRIPTION]: "K objednání receptu",
};

test.each(flowData)(
  "clicking the options changes the selection (initial %s, clicking %s, expecting %s)",
  (initialOrderType: OrderType, selectingOptionByText: string | null, expectingSelectedOrderType: OrderType) => {
    render(<OrderTypeForm initialOrderType={initialOrderType} onSubmit={() => null} />);

    expect(getSelectedOrderType()).toBe(initialOrderType);

    // we also check the default works
    if (selectingOptionByText !== null) {
      fireEvent.click(screen.getByText(new RegExp(`${selectingOptionByText}`, "i")));
    }

    expect(getSelectedOrderType()).toBe(expectingSelectedOrderType);
  }
);

test.each(flowData)(
  "clicking the options changes the CTA button text (initial order type %s, clicking %s, expecting order type %s)",
  (initialOrderType: OrderType, selectingOptionByText: string | null, expectingSelectedOrderType: OrderType) => {
    render(<OrderTypeForm initialOrderType={initialOrderType} onSubmit={() => null} />);

    expect(getCtaButton().textContent).toMatch(buttonLabel[initialOrderType]);

    // we also check the default works
    if (selectingOptionByText !== null) {
      fireEvent.click(screen.getByText(new RegExp(`${selectingOptionByText}`, "i")));
    }

    expect(getCtaButton().textContent).toMatch(buttonLabel[expectingSelectedOrderType]);
  }
);

test.each(flowData)(
  "clicking the CTA button submits with correct order type value (initial %s, clicking %s, expecting %s)",
  (initialOrderType: OrderType, selectingOptionByText: string | null, expectingSelectedOrderType: OrderType) => {
    let selectedOrderType = null;
    render(
      <OrderTypeForm
        initialOrderType={initialOrderType}
        onSubmit={(orderType) => {
          selectedOrderType = orderType;
        }}
      />
    );

    // we also check the default works
    if (selectingOptionByText !== null) {
      fireEvent.click(screen.getByText(new RegExp(`${selectingOptionByText}`, "i")));
    }

    expect(selectedOrderType).toBe(null);
    fireEvent.click(getCtaButton());
    expect(selectedOrderType).toBe(expectingSelectedOrderType);
  }
);

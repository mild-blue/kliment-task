import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { OrderType, useUser } from "../state";
import { OrderTypeForm } from "../components/OrderTypeForm";
import { PageContent } from "../components/design/PageContent";

export function Login() {
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  const onOrderTypeSelectorSubmit = useCallback(
    (orderType: OrderType) => {
      setUser({ ...user, orderType });
      navigate("/");
    },
    [user, setUser, navigate]
  );

  return (
    <div className="LoginScreen">
      <h2>Objednávkový systém</h2>

      <PageContent>
        <OrderTypeForm onSubmit={onOrderTypeSelectorSubmit} initialOrderType={user.orderType ?? OrderType.SCREENING} />
      </PageContent>

      <footer>
        <p>
          <a href="#">
            ← Zpět na web <strong>mild.blue</strong>
          </a>
        </p>
      </footer>
    </div>
  );
}

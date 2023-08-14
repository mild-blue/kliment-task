import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { OrderType, useUser } from "../state";
import { PageContent } from "../components/design/PageContent";
import { CatEmoji } from "../components/CatEmoji";

const orderTypeLabel: { [key in OrderType]: string } = {
  [OrderType.SCREENING]: "vyšetření",
  [OrderType.PRESCRIPTION]: "recept",
};

export function Homepage() {
  const [user] = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.orderType === null) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (user.orderType === null) {
    return null;
  }

  return (
    <>
      <h2>... už to sviští!</h2>
      <PageContent>
        <p>
          Gratulujeme k výběru! Vaše volba je: <strong>{orderTypeLabel[user.orderType]}</strong>.
        </p>
        <p>Než Vás naši asistenti obslouží, přijměte jako malý dárek následující kočičí emoji.</p>
        <CatEmoji />
        <p>
          Chcete změnit výběr? <Link to="/login">Volte znovu.</Link>
        </p>
      </PageContent>
    </>
  );
}

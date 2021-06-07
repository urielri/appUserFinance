import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

interface Contability {
  balance: number;
  income: number;
  egress: number;
}
function Info(props: {
  user: { name: string; lastName: string; ocupation: string };
  contability: Contability;
  openModal: Function;
}): JSX.Element {
  const { user, contability, openModal } = props;
  return (
    <div className="info">
      <div className="userInfo">
        <h2>Bienvenido, {user.name}</h2>
        <Button
        color="primary"
        variant="contained"
          onClick={() =>
            openModal({ isOpen: true, content: "operation", movementId: "" })
          }
        >
          Nueva
        </Button>
      </div>
      <div className="contability">
        <span>Balance</span>
        <h1>${contability.balance}</h1>
        <div className="operations">
          <span className="type">
            <span>Ingresos</span>
            <h3>${contability.income}</h3>
          </span>
          <span className="type">
            <span>Gastos</span>
            <h3>${contability.egress}</h3>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Info;

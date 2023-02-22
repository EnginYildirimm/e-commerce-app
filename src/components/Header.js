import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ total, money }) => {
  return (
    <div className="Navi">
      <div className="marka">
        <h4>Golden Road</h4>
        <img
          src="https://www.pngmart.com/files/1/Gold-Transparent-PNG.png"
          alt=""
        />
      </div>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Cüzdanınızda <span>${moneyFormat(money - total)}</span> var !
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Cüzdanınızda <span>${moneyFormat(money)}</span> var !
        </div>
      )}
      {money - total === 0 && <div className="header">Paranız tükendi !</div>}
    </div>
  );
};

export default Header;

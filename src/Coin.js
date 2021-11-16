import React from "react";
import css from "./coin.module.css";

const Coin = ({ data }) => {
  return (
    <div className={css.coin}>
      <div className={css.row}>
        <div className={css.head1}>
          <p id="coin-title">Name</p>
          <p id="coin-symbol">Symbol</p>
        </div>
        <div className={css.head2}>
          <p className={css.price}>Price</p>
          <p>Percentage</p>
        </div>
        <div className={css.head3}>
          <p id="volume">Volume</p>
          <p id="market">Mkt Cap </p>
        </div>
      </div>
      {data.map((data) => (
        <div className={css.row}>
          <div className={css.namesymbol}>
            <img src={data.image} id="coinImage"></img>
            <p id="coin-title" style={{ fontWeight: 700 }}>
              {data.name}
            </p>
            <p id="coin-symbol">{data.symbol.toUpperCase()}</p>
          </div>
          <div className={css.pricepercentage}>
            <p className={css.price}>
              {"₹" + data.current_price.toLocaleString()}
            </p>
            {data.price_change_percentage_24h < 0 ? (
              <p className={css.red}>
                {data.price_change_percentage_24h.toFixed(2) + "%"}
              </p>
            ) : (
              <p className={css.green}>
                {data.price_change_percentage_24h.toFixed(2) + "%"}
              </p>
            )}
          </div>
          <div className={css.volumemarket}>
            <p id="volume">{"₹" + data.total_volume.toLocaleString()}</p>
            <p id="market">{"₹" + data.market_cap.toLocaleString()} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coin;

import { useEffect, useState } from "react";

const options = { method: "GET", headers: { Accept: "application/json" } };

export default function UpbitList() {
  const [coinList, setCoinList] = useState([]);

  const detail = [];
  // 코인 목록 불러오기

  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setCoinList(upbitCoin);
      })
      .catch((err) => console.error(err));
  }, []);

  const setDetailfunc = (coin) => {
    detail.push({ coin });
  };

  console.log(coinList);
  console.log(detail);
  return (
    <>
      {coinList.map((coin) => {
        setDetailfunc(coin.market);
      })}
      <ul>
        {detail.slice(1, 11).map((coin) => (
          <li>{coin.coin}</li>
        ))}
      </ul>
    </>
  );
}

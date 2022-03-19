import { useEffect, useState } from "react";

export default function UpbitList() {
  // Upbit의 CoinList 저장
  const [coinList, setCoinList] = useState([]);

  const options = { method: "GET", headers: { Accept: "application/json" } };
  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setCoinList(upbitCoin);
      })
      .catch((err) => console.error(err));
  }, []);

  // coinList에서 KRW로 시작하는 코인의 market과 korean_name을 krwCoin에 저장
  const krwCoin = [];
  const getKrwCoinfunc = () => {
    coinList.map((coin) => {
      if (coin.market.startsWith("KRW")) {
        krwCoin.push({
          korean_name: coin.korean_name,
          market: coin.market,
        });
      }
    });
  };

  console.log(krwCoin);

  const getHighPricefunc = (coin) => {
    var high = 0;

    fetch(`https://api.upbit.com/v1/ticker?markets=${coin}`, options)
      .then((response) => response.json())
      .then((response) => {
        high = response[0].highest_52_week_price;
        console.log(response[0].highest_52_week_price);
      })
      .catch((err) => console.error(err));

    return <li>{high}high</li>;
  };

  getKrwCoinfunc();

  return (
    <>
      <dl>
        {krwCoin.slice(1, 3).map(
          (coin) => getHighPricefunc(coin.market)
          // <li key={coin.market}>
          //   {coin.korean_name}의 52주 최고가 : {getHighPricefunc(coin.market)}
          // </li>
        )}
      </dl>
    </>
  );
}

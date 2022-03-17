import { useEffect, useState } from "react";


export default function UpbitList() {
  const options = { method: "GET", headers: { Accept: "application/json" } };

  const [coinList, setCoinList] = useState([]);

  const krwCoin = [];
  // 코인 목록 불러오기

  useEffect(() => {
    fetch("https://api.upbit.com/v1/market/all?isDetails=false", options)
      .then((response) => response.json())
      .then((upbitCoin) => {
        setCoinList(upbitCoin);
      })
      .catch((err) => console.error(err));
  }, []);


  const getKrwCoinfunc = () => {
    coinList.map( (coin) => {
      if(coin.market.startsWith("KRW")) {
        krwCoin.push(coin.market);
      }
    })
  }

  // console.log(coinList);

  

  const getHighPricefunc = (coin) => {

    var high = 777770;

    fetch(`https://api.upbit.com/v1/ticker?markets=${coin}`, options)
    .then(response => response.json())
    .then((response) => {
      console.log(coin)
      console.log(response[0].highest_52_week_price)
    })
    .catch(err => console.error(err))

    return high;
  }



  getKrwCoinfunc();
  

  return (
    <>
    <dl>
    {krwCoin.slice(1, 5).map( (coin) => (
        <li key={coin}>{coin}의 52주 최고가 : {getHighPricefunc(coin)}</li>
  ))}
    </dl>
    </>
  );
}

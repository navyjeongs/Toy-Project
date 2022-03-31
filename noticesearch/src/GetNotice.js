import React, { useEffect } from "react";

const options = { method: "GET" };

const GetNotice = () => {
  const getMovie = async () => {
    const json = await fetch(
      `https://sandbox-apigw.koscom.co.kr/v2/market/stocks/kospi/lists`,
      options
    ).then((res) => console.log(res));
  };

  getMovie();
  return (
    <div>
      <h1>asda</h1>
    </div>
  );
};

export default GetNotice;

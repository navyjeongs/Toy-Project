import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1 className="title">
        <Link to="/">How Many Coins Can I get?</Link>
        <button>
          <Link to="/CoinList" className="CoinList">
            코인파프리카
          </Link>
        </button>
        <button>
          <Link to="/UpbitList" className="CoinList">
            업비트
          </Link>
        </button>
      </h1>
      <hr />
    </div>
  );
}

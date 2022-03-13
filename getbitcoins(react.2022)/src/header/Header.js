import './Header.css';
import {Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1 className='title' >
            <Link to ="/">How Many Coins Can I get?</Link>
            <Link to="/CoinList" className='CoinList'>asas</Link>
            </h1>
            <hr/>
        </div>
    );
}
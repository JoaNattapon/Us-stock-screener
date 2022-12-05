import React from "react";
import './component.css';

const Header = () => {


    return(
        <div className="header">
            <h1><marquee>US : Stock Screener   
                &nbsp;&nbsp;<span className="green">AAPL : $147.81</span>
                &nbsp;&nbsp;<span className="red">MSFT : $255.02</span>
                &nbsp;&nbsp;<span className="red">GOOG : $100.83</span>
                &nbsp;&nbsp;<span className="green">AMZN : $94.13</span>
                &nbsp;&nbsp;<span className="red">BRK.A : $475969.00</span>
                &nbsp;&nbsp;<span className="green">TSLA : $194.86</span>
                &nbsp;&nbsp;<span className="red">UNH : $536.16</span>
                &nbsp;&nbsp;<span className="green">JNJ : $178.88</span>
                &nbsp;&nbsp;<span className="red">XOM : $109.86</span>
                &nbsp;&nbsp;<span className="green">WMT : $153.22</span>
                &nbsp;&nbsp;<span className="red">NVDA : $168.76</span>
                &nbsp;&nbsp;<span className="green">V : $217.66</span>
                &nbsp;&nbsp;<span className="red">JPM : $135.16</span>
                &nbsp;&nbsp;<span className="green">PG : $150.61</span>
                &nbsp;&nbsp;<span className="red">LLY : $374.76</span>
                &nbsp;&nbsp;<span className="green">CVX : $181.03</span>
            </marquee></h1>
        </div>
    )
}

export default Header;
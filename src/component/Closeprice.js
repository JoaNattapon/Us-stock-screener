import React, { useEffect, useState } from "react";
import './component.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";

const Closeprice = () => {

    const [finance, setFinance] = useState();
    const [ticker, setTicker] = useState('');

    const getFinance = () => {

        axios
            .get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=P17NEneYkRviVQYOR8ix5MtgzRpTp61A`)
            .then((res) => {
                setFinance(res.data.results[0].c)

            })
            .catch((err) => {
                console.log(err);
            })
    }


    const displayFinance = () => {
        return(
            <div className="closeprice">
                {finance !== undefined && <h3>{ticker} stock is currently at ${finance}</h3>}
            </div>
        )
    }



    return (
        <div className="news">
            <h1>Find close price of stock</h1>
            <div className="searchtap">

                <input className="submitInput" type="text" placeholder="Ticker input" 
                value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} />
                <button className="searchBtn" onClick={() => getFinance()}>Seach</button>

                <Link to='/' className="switchgreenbtn">
                    Switch to News Search
                </Link>

            </div>

            <div className="closeprice">
                {displayFinance()}
            </div>

        </div>
    )
}

export default Closeprice;
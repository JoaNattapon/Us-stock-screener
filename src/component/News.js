import React, { useEffect, useState } from "react";
import './component.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";


const News = () => {

    const [news, setNews] = useState([]);
    const [ticker, setTicker] = useState('');



    const getNews = () => {

        axios
            .get
            (`https://api.polygon.io/v2/reference/news?ticker=${ticker}&limit=3&apiKey=P17NEneYkRviVQYOR8ix5MtgzRpTp61A`)
            .then((response) => {
                
                setNews(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const allNews = news.map((items,i) => {
        return(
            <div className="news-template" key={i}>
                <h1>{items.title}</h1>
                <img src={items.image_url} width='650px' height='400px'></img>
                <p>{items.description}</p>
            </div>
        )
    })

    return (

        <div className="news">
            <h1>Stock News</h1>
            <div className="searchtap">


                <input className="submitInput" type="text" placeholder="Ticker input"
                    value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} />
                <button className="searchBtn" onClick={() => getNews()}>Seach</button>

                <Link to='/closeprice' className="switchbluebtn">
                    Switch to find stock price
                </Link>

            </div>

            <div key={1}>
               {allNews} 
            </div>
            
        </div>
    )
}

export default News;

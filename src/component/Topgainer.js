import React, { useEffect, useState } from "react";
import './component.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";
import data from "./data.json"

const Topgainer = () => {

    const [top, getTop] = useState();
    
    

    const allTopGainer = data.map((stock,i) => {
        let newPercentage = (Math.round(stock.changesPercentage * 100) / 100).toFixed(2);
        return(
            <div className="showgainer">
                <h3>{stock.symbol}</h3>
                <p>{stock.name}</p>
                <p><span>+ {newPercentage} %</span></p>
            </div>
        )
    })
    
    return(
        <>
            {allTopGainer}
        </>
    )
}

export default Topgainer;
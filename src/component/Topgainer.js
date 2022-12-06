import React, { useEffect, useState } from "react";
import './component.css';
import { BrowserRouter, Routes, Route, Link, Navigation } from 'react-router-dom';
import axios from "axios";
import data from "./data.json"

const Topgainer = () => {

    const [top, getTop] = useState();
    
    

    const allTopGainer = data.map((stock,i) => {
        return(
            <div className="showgainer">
                <h3>{stock.symbol}</h3>
                <p>{stock.name}</p>
                <p><span>+ {stock.changesPercentage} %</span></p>
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
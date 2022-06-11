import { useState, useEffect } from "react";

const Details = ({data, match}) => {
    const [stock, setStock] = useState([{name: null}]);
    const symbol = match.params.symbol;

    const getStock = () => {
        const foundStock = data.filter((elem) => elem.symbol === symbol);
        setStock(foundStock);
    }

    useEffect(() => {
        getStock();
        console.log(stock);
    }, []);

    return (
        <div>
            <h1>Name: {stock[0].name}</h1>
            <h1>Price: {stock[0].lastPrice} </h1>
            <h1>Change: {stock[0].change} </h1>
            <h1>High: {stock[0].high} </h1>
            <h1>Low: {stock[0].low} </h1>
            <h1>Open: {stock[0].open} </h1>
        </div>
    )
}

export default Details;
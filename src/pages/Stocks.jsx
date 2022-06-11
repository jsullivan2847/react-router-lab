import { Link } from "react-router-dom"

const Stocks = ({stocks}) => {
    
    const stockLinks = stocks.map((stock, index) => {
        return(
            <Link key={index} to={`/stock/${stock.symbol}/details`}>
            <h2>{stock.name}</h2>
        </Link>
        )
        
    })

    return (
        <div>
            {stockLinks}
        </div>
    )
}

export default Stocks;
import { Link } from "react-router-dom";


const Nav = () => {
    return(
       <div className="nav">
        <div className="links-box">
        <Link to='/'>
        <h5 id="home-link">iStocks</h5>
        </Link>
        <Link to="/about">
        <h5>About</h5>
        </Link>
        <Link to="/stocks">
        <h5>Stocks</h5>
        </Link>
        </div>
       </div>
    )
}

export default Nav;
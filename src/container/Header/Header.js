import './Header.css';
import Navbar from "../../components/Navbar/Navbar";
const Header = () => {
    return (
        <div className="header__main">
            <Navbar />
            <div className="discover">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, eum.</p>
                <button className="btn">DISCOVER MORE</button>
            </div>
        </div>
    );
}

export default Header;
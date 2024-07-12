import rouletteWheel from "../../assets/roulette-wheel.svg";
import "./Header.scss";

function Header() {
    return (
        <div className="header">
            <img className="roulette-wheel" src={rouletteWheel} />
            <h1>Roulette Regret</h1>
        </div>
    );
}

export default Header;

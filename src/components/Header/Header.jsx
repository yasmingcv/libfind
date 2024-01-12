import { Link } from "react-router-dom"
import './style.css'
import logo from '../../assets/logodark.png'

function Header(){
    return(
        <header>
            <Link to='/'>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <nav className="header__menu">
                <Link to='/buscar' className="menu__item">Buscar</Link>
                <Link to='/salvos' className="menu__item">Salvos</Link>
            </nav>
        </header>
    )
}

export default Header
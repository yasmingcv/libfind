import { Link } from "react-router-dom"
import './style.css'
import logo from '../../assets/logodark.png'
import Navbar from '../Navbar/Navbar'

function Header(){
    return(
        <header>
            <Link to='/'>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <Navbar></Navbar>
        </header>
    )
}

export default Header
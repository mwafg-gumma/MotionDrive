// import {FaUser} from 'react-icons/fa' If You Want using Icon Here Is it
import './Nav.css'

const NavBar = () => {
    return (
        <>
        <div className="nav">
            <div className="nav-logo">
                <h1 className="logo" >AutoVibe</h1>
            </div>
            <div className="nav-menu">
                <ul className="list">
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >Service</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" className="contact">contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavBar

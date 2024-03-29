import{Link} from "react-router-dom";
import "./header.css"
function Header(){
    return(
        <nav>
            <div className="head-container">
            <Link to="/"><img src="https://cdn-icons-png.flaticon.com/128/33/33308.png?ga=GA1.1.1211982432.1675417347" className='imageicon' alt="icon"/></Link>
            <Link to ="/Chats"><h1 className='nav-item'>Chats</h1></Link>
            <Link to="/Updates"><h1 className='nav-item'>Status</h1></Link>
            <Link to="/Calls"><h1 className='nav-item'>Calls</h1></Link>
            <img src="https://cdn-icons-png.flaticon.com/128/685/685655.png?ga=GA1.1.1211982432.1675417347&track=ais" className='imageicon nav-item' alt="cam"/>
            <img src="https://cdn-icons-png.flaticon.com/128/4687/4687318.png?ga=GA1.1.1211982432.1675417347&track=ais" className='imageicon nav-item' alt="search"/>
            </div>
        </nav>
    )

}
export default Header;
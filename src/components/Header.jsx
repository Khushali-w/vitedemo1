import react, { useState } from "react";
function Header() {
    const[isView,setIsView] = useState(false)

    return (
        <header>
            <div className="nav-class">
                <p className="logo">Academy</p>
            </div>

            <ul className= {isView ? 'showbar' :"navbar" }>
                <li onClick={()=>setIsView(!isView)}><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" className="header-btn">Login</a></li>
            </ul>
            <span className={isView ? 'hidetoggle' : 'toggle' } onClick={()=>setIsView(!isView)}>❌</span>
        </header>
    );

}
export default Header
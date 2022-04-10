import React from "react";
import heart from '../../icon/Vector.svg'
import basket from '../../icon/Vector2.svg'
import {Link} from "react-router-dom";

const Header = ({itemCount}) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-inner'>
                    <Link className='brand' to='/' title='главная'>
                        Qpick
                    </Link>
                    <nav className='header-nav'>
                        <Link className='header-nav-link' href='#' title='избранное'>
                            <img className='nav-icon' src={heart}/>
                        </Link>

                        <Link className='header-nav-link' to='/basket' title='корзина'>
                            <img className='nav-icon' src={basket}/>
                            <span className='icon-button__badge'>{itemCount}</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from "react";
import heart from '../../icon/Vector.svg'
import basket from '../../icon/Vector2.svg'

const Header = () => {
    return (
        <header className='header'>
        <div className='container'>
            <div className='header-inner'>
                <div className='brand'>
                    Qpick
                </div>

                <div className='nav'>
                    <a className='header-nav-link' href='#' title='избранное'>
                        <img className='nav-icon' src={heart}/>
                    </a>
                    <a className='header-nav-link' href='#' title='корзина'>
                        <img className='nav-icon' src={basket}/>
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
import tlg from '../../icon/Telegram.png'
import vk from '../../icon/VK.png'
import ws from '../../icon/Whatsapp.png'
import {Link} from "react-router-dom";
import global from '../../icon/globe.png'
import React from "react";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content-footer'>
                <div className='card-content'>
                    <div className='brand b-footer'>
                        qpick
                    </div>
                    <div>
                        <ul className='menu-footer'>
                            <li>
                                <Link className='link-footer' to='/favourites'>Избранное</Link>
                            </li>
                            <li>
                                <Link className='link-footer' to='/basket'>Корзина</Link>
                            </li>
                            <li>
                                <Link className='link-footer' to='/contacts'>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='menu-footer'>
                            <li>
                                <Link className='link-footer'>Условия сервиса</Link>
                            </li>
                            <li>
                                <img className='global-icon' src={global}/>
                                <span className='menu-language'>
                                <Link className='link-footer'>Каз</Link>
                            </span>
                                <span className='menu-language'>
                                <Link className='link-footer'>Рус</Link>
                            </span>
                                <span className='menu-language'>
                                <Link className='link-footer'>Eng</Link>
                            </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link className='link-footer'>
                            <img className='social-network' src={vk} width='31px'/>
                        </Link>
                        <Link className='link-footer'>
                            <img className='social-network' src={tlg}/>
                        </Link>
                        <Link className='link-footer'>
                            <img className='social-network' src={ws}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer
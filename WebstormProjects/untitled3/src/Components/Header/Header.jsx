import React from "react";
import style from './Header.module.css';

function Header(props) {
    return (
        <div className={style.header}>
            <nav>
                <a>{props.forHeader.catalog}</a>
                <a>{props.forHeader.about}</a>
                <a>{props.forHeader.delivery}</a>
            </nav>

            <img src={props.forHeader.img.logo} alt="logo"/>
            
            <nav>
                <a>{props.forHeader.contacts}</a>
                <button className={style.btn1}>
                    <img src={props.forHeader.img.search} alt="search"/>
                </button>
                <button>
                    <img src={props.forHeader.img.shop} alt="shop"/>
                </button>
                <button>
                    <img src={props.forHeader.img.account} alt="account"/>
                </button>
            </nav>

        </div>
    )
}

export default Header;
import React from "react";
import style from "./Single-block.module.css"

const SingleBlock = (props) => {
    return (
        <div className={style.singleBlock}>
            <img className={style.blockImg} src={props.img} alt=""/>
            <div className={style.text}>
                <div>{props.name}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}

export default SingleBlock;
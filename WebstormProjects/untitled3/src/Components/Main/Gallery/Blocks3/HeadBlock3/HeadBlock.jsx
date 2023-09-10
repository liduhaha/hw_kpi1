import React from "react";
import style from "./HeadBlock.module.css"

const HeadBlock = (props) => {
    return (
        <div className={style.headBlock2}>
            <div className={style.headText}>{props.forHeadBlock.text}</div>
        </div>
    )
}

export default HeadBlock;
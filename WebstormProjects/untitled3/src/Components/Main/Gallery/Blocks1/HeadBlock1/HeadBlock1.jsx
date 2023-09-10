import React from "react";
import style from "./HeadBlock1.module.css"

const HeadBlock1 = (props) => {
    return (
        <div className={style.headBlock1}>
            <div className={style.headText}>{props.forHeadBlock.text}</div>
        </div>
    )
}

export default HeadBlock1;
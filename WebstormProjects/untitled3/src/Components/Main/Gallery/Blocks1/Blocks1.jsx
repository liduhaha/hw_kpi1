import React from "react";
import style from "./Blocks1.module.css";
import state from "../../../../state/state";
import SingleBlock from "../Single-block/Single-block";
import HeadBlock1 from "./HeadBlock1/HeadBlock1";

let singleBlockElement = state.main.gallery.blocks.map(block => <SingleBlock img={block.img} name={block.name} price={block.price}/>)

const Blocks1 = (props) => {
    return (
        <div className={style.blocks}>
            <HeadBlock1 forHeadBlock={props.forBlocks.beauty}/>
            {singleBlockElement}
        </div>
    )
}

export default Blocks1;
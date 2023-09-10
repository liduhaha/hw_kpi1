import React from "react";
import style from "./Blocks3.module.css";
import state from "../../../../state/state";
import SingleBlock from "../Single-block/Single-block";
import HeadBlock from "./HeadBlock3/HeadBlock";

let singleBlockElement = state.main.gallery.blocks.map(block => <SingleBlock img={block.img} name={block.name} price={block.price}/>)

const Blocks3 = (props) => {
    return (
        <div className={style.blocks}>
            <HeadBlock forHeadBlock={props.forBlocks.brows}/>
            {singleBlockElement}
        </div>
    )
}

export default Blocks3;
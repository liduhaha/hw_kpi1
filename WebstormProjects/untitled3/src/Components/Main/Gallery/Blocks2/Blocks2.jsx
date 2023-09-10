import React from "react";
import style from "./Blocks2.module.css";
import state from "../../../../state/state";
import SingleBlock from "../Single-block/Single-block";
import HeadBlock from "./HeadBlock2/HeadBlock";

let singleBlockElement = state.main.gallery.blocks.map(block => <SingleBlock img={block.img} name={block.name} price={block.price}/>)

const Blocks2 = (props) => {
    return (
        <div className={style.blocks}>
            {singleBlockElement}
            <HeadBlock forHeadBlock={props.forBlocks.care}/>

        </div>
    )
}

export default Blocks2;
import React from "react";
import style from './Gallery.module.css'
import Blocks1 from "./Blocks1/Blocks1";
import HeadBlock1 from "./Blocks1/HeadBlock1/HeadBlock1";
import state from "../../../state/state";
import Blocks2 from "./Blocks2/Blocks2";
import Blocks3 from "./Blocks3/Blocks3";


function Gallery(props) {
    return (
        <div className={style.gallery}>
            <Blocks1 forBlocks={props.forGallery}/>
            <Blocks2 forBlocks={props.forGallery}/>
            <Blocks3 forBlocks={props.forGallery}/>
        </div>
    )
}

export default Gallery;
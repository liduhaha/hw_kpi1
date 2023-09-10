import React from "react";
import style from './Main.module.css';
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider/Slider";

function Main(props) {
    return (
        <div className={style.main}>

            <Slider/>
            <Gallery forGallery={props.forMain.gallery}/>

        </div>
    )
}

export default Main
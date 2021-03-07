import React from 'react';
import Css from "./Personnage.module.css";
import ImgPerso from "./imgPerso/imgPerso"

const personnage = (props) =>{
    return(
        <div className={Css.grid}>
        <div>
            <ImgPerso numImg={props.img}/>
        </div>
        <div className="d-flex flex-column">
            <div>Force : {props.force}</div>
            <div>Agilite : {props.agilite}</div>
            <div>intelligence : {props.intelligence}</div>
        </div>
    </div>
    )
};

export default personnage;
import React from 'react';
import ImgPerso1 from "../../../../assets/images/persos/player1.png";
import ImgPerso2 from "../../../../assets/images/persos/player2.png";
import ImgPerso3 from "../../../../assets/images/persos/player3.png";
import Css from  "./imgPerso.module.css";

const imgPerso = (props) => {
    let img = "";
    if(props.numImg === 1) img = ImgPerso1;
    if(props.numImg === 2) img = ImgPerso2;
    if(props.numImg === 3) img = ImgPerso3;


    return (
        <div className={[Css.grid, "no-gutter text-center align-items-center"].join(' ')}>
            <div className={[Css.fleche, Css.gauche, "m-auto"].join(' ')}></div>
            <img src={img} alt="perso" className="m-auto"></img>
            <div className={[Css.fleche, Css.droite, "m-auto"].join(' ')}></div>
        </div>
    );
}

export default imgPerso;
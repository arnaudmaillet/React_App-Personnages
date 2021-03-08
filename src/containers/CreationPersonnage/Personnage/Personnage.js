import React from 'react';
import Css from "./Personnage.module.css";
import ImgPerso from "./ImgPerso/ImgPerso";
import SkillPerso from "./SkillPerso/SkillPerso"

const personnage = (props) =>{
    return(
        <div className={[Css.grid, "mt-4"].join(' ')}>
        <div>
            <ImgPerso 
                numImg={props.img}
                gauche={props.gauche}
                droite={props.droite}
            />
        </div>
        <div className="d-flex flex-column">
            <SkillPerso 
                nbPointDispo={props.nbPointDispo}
                force = {props.force}
                agilite = {props.agilite}
                intelligence = {props.intelligence}
                charisme = {props.charisme}
                enleverPoint = {props.enleverPoint}
                ajouterPoint = {props.ajouterPoint}
            />
        </div>
    </div>
    )
};

export default personnage;
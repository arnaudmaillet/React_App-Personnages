import React from "react";
import Arme from "./Arme/Arme";
import imgArc from "../../../assets/images/armes/arc.png";
import imgMassue from "../../../assets/images/armes/fleau.png";
import imgEpee from "../../../assets/images/armes/epee.png";
import imgHache from "../../../assets/images/armes/hache.png"


const armes = (props) => (
        <div className="d-flex w-100 mt-4">
            {props.liste.map(arme => {
                let imgArme;
                switch(arme){
                    case "Arc" : imgArme = imgArc;
                    break;
                    case "Massue" : imgArme = imgMassue;
                    break;
                    case "Epee" : imgArme = imgEpee;
                    break;
                    case "Hache" : imgArme = imgHache;
                    break;
                    default :
                }
                return (
                    <div className="w-25" key={arme}>
                        <Arme  
                            imgArme = {imgArme}
                            isCurrentArme = {props.currentArme === arme }
                            clic = {() => props.changeArme(arme)}
                        >{arme}</Arme>
                    </div>
                )
            })}
        </div>
)

export default armes;
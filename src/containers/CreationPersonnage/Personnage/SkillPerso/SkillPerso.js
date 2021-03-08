import React from "react";
import Skill from "./Skill/Skill"

const skillPerso = (props) => {
    return (
        <>
            <div className="d-flex">
                <div>Point Restants :</div>
                <div className="ml-1">{props.nbPointDispo}</div>
            </div>
            <div>
                <Skill 
                    nbPoints ={props.force}
                    moins = {()=>props.enleverPoint('force')}
                    plus = {()=>props.ajouterPoint('force')}
                >Force</Skill>

                <Skill 
                    nbPoints ={props.agilite}
                    moins = {()=>props.enleverPoint('agilite')}
                    plus = {()=>props.ajouterPoint('agilite')}
                >Agilite</Skill>

                <Skill 
                    nbPoints ={props.intelligence}
                    moins = {()=>props.enleverPoint('intelligence')}
                    plus = {()=>props.ajouterPoint('intelligence')}
                >Intelligence</Skill>

                <Skill 
                    nbPoints ={props.charisme}
                    moins = {()=>props.enleverPoint('charisme')}
                    plus = {()=>props.ajouterPoint('charisme')}
                >Charisme</Skill>
            </div>
        </>
    )
}

export default skillPerso
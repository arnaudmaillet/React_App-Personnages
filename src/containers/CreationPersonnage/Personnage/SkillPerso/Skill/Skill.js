import React from "react";
import Css from "./Skill.module.css"

const skill = (props) => {

    let casePoint = []
    for (let i = 0 ; i < props.nbPoints; i++){
        casePoint.push(<div key={i} className={Css.points}></div>)
    }

    return (
        <div className="d-flex mt-2">
            <div 
                className={[Css.signe, Css.moins, "mr-2"].join(' ')}
                onClick={props.moins}
            ></div>
            <div 
                className={[Css.signe, Css.plus, "mr-2"].join(' ')}
                onClick={props.plus}
            ></div>
            <div className="d-flex mr-2">{props.children} </div> {casePoint}
        </div>
    )
}

export default skill
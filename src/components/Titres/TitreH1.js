import React from 'react';
import Css from "./TitreH1.module.css";


const titreh1 = (props) => {
    const style = `${Css.font} border border-dark bg-primary p-2 m-2 rounded text-white text-center`
    
    return(
        <h1 className={style}>{props.children}</h1>
    )
};

export default titreh1;
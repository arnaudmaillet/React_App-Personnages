import React from 'react';

const bouton = (props) => {
    const style = `btn ${props.typeBtn} ${props.css}`
    
    return(
        <button className={style} onClick={props.clic}>{props.children}</button>
    )
};

export default bouton;
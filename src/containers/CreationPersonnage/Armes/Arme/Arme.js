import React from "react";


const component = (props) => (
        <div>
            <div className="d-flex">
                <img 
                    src={props.imgArme} 
                    alt={props.children} 
                    className="m-auto"
                    style={{
                        opacity : props.isCurrentArme ? 1 : 0.5,
                        cursor : "pointer"
                    }}
                    onClick = {props.clic}
                />
            </div>
            <div className="d-flex">
                <div className="m-auto">{props.children}</div>
            </div>
        </div>
)

export default component;
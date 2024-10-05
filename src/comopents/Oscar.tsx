import React from "react";

type advancedProp={
    children : React.ReactNode
}
export const Oscar = (props:advancedProp) => {

    return(

        <div>
            {props.children}
        </div>
    )
}
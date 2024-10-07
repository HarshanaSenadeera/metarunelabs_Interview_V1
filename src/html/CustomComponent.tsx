import React from 'react'
import {Greet} from "../comopents/Greet";


export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>
}
import {Name} from '../comopents/Presons.types'

type list={
    names:Name[]
}
export const PersonalList = (props:list) => {

    return(

        <div>

            {props.names.map((name)=>(
                <div>
                    {name.f_name}{name.l_name}
                </div>
            ))}

        </div>
    )
}
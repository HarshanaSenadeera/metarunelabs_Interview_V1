type person_name={
    name:{
        f_name:string
        l_name:string
    }
}
export const Person = (props:person_name) => {

    return(

        <div>
            <h2>{props.name.f_name} {props.name.l_name}</h2>
        </div>
    )
}
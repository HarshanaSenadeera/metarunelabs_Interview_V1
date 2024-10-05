type list={
    names:{
       firstname:string
       lastname:string
    }[]
}
export const PersonalList = (props:list) => {

    return(
        <div>
            {props.names.map((name, index) => (
                <div key={index}>
                    {name.firstname} {name.lastname}
                </div>
            ))}
        </div>
    )
}
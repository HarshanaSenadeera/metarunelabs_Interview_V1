type list={
    names:{
       firstname:string
       lastname:string
    }[]
}
export const PersonalList = (props:list) => {

    return(

        <div>

            {props.names.map((name)=>(
                <div>
                    {name.firstname} {name.lastname}
                </div>
            ))}

        </div>
    )
}
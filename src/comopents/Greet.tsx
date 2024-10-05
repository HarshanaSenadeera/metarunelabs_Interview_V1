type GreetProps={
    name : string
    /*put ? mark make it optional*/
    marks ?:number
    isLog ?:boolean
}

export const Greet = (props:GreetProps) => {

    return(
        <div>

            <h1>
                {
                    props.isLog ? `Welcome ${props.name}...! You have ${props.marks} marks` : `Welcome Guest...!`
                }

            </h1>
        </div>
    )

}
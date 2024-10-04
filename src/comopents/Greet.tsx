type GreetProps={
    name : string
    marks :number
    isLog:boolean
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
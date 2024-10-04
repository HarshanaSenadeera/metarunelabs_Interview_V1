type GreetProps={
    name : string
    marks :number
}

export const Greet = (props:GreetProps) => {

    return(
        <div>
            <h1>Welcome {props.name}...! You have {props.marks} marks</h1>
        </div>
    )

}
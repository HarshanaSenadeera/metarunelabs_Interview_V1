type statusProps={
    status:`loading` | `success` | 'error'
}
export const Status = (props:statusProps) => {

    let massage
    if (props.status === 'loading'){
        massage = 'loading'
    }else if(props.status === 'success'){
        massage = 'success'
    }else if(props.status === 'error'){
        massage = 'error'
    }


    return(
        <div>

            <h2>Status - {massage}</h2>


        </div>
    )
}
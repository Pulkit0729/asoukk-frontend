const InputComp = (props)=>{
    return(
        <div className="mb-3">
                    <input type={props.type} name={props.title} id={props.title} placeholder={props.title} className="form-control input-class"/>
                </div>
    )
}
export default InputComp;
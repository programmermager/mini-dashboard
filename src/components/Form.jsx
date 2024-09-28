function Form({type, placeholder}){
    return (
        <input className="w-full rounded-lg border active:border-black p-2 text-sm" placeholder={placeholder} type={type}/>
    );
}

export default Form;
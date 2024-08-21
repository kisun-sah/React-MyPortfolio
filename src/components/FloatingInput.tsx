const FloatingInput = (props:any) => {
    
    return <div className="relative">

    {props.id!="message"?

    <input type="text" id={props.id} value={props.value} onChange = {(e) => props.handleChange(props.id ,e.target.value )}className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-textColor appearance-none   hover:shadow-[0_0_8px_0_#64FFDA]   focus:outline-none focus:right-0 focus:border-primaryColor peer" placeholder=" " />:

    <textarea name={props.name} id= {props.id } rows={4}  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none 
    hover:shadow-[0_0_8px_0_#64FFDA]  focus:outline-none focus:right-0 focus:border-primaryColor peer"placeholder=" ">
</textarea>}
    <label htmlFor={props.id} className={`absolute text-sm text-textColor dark:text-gray-400 duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${ props.id!="message"?"peer-placeholder-shown:top-1/2 ":"peer-placeholder-shown:top-6"}peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}>{props.name}</label>
</div>
}
export default FloatingInput;
import { useEffect, useRef } from "react";

const Input = ({inputValue, handleChange, handleBlur})=>{
    const inputRef = useRef();

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);
    return (
        <input type="text" className="margin-input" value={inputValue} onChange={handleChange} onBlur={handleBlur} ref={inputRef} />
    );
}

export default Input;
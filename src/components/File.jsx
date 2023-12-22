import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataSliceActions } from "../provider/redux/features/dataSlice";
import EditOptions from "./EditOptions";
import Input from "./Input";

const File = ({ name, id }) => {
    const [inputValue, setInputValue] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleBlur = () => {
        if (isEdit) {
            dispatch(dataSliceActions.changeName({ name: inputValue, id }));
            setIsEdit(false);
        }
    }

    const setIsEditTrue = () => {
        setInputNameOnEdit();
        setIsEdit(true);
    }

    const setInputNameOnEdit = () => {
        setInputValue(name);
    }

    return (
        <div className="flex margin-file folder-container">
            <div className="flex">
                <span>📄</span>
                {
                    isEdit ? <Input inputValue={inputValue} handleChange={handleChange} handleBlur={handleBlur} /> : <span>{name}</span>
                }
            </div>
            <EditOptions id={id} setIsEditTrue={setIsEditTrue} isFileOptions={true} />
        </div>
    );
}

export default File;
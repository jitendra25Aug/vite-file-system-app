import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataSliceActions } from "../provider/redux/features/dataSlice";
import EditOptions from "./EditOptions";
import Input from "./Input";

const Folder = ({ name, id, toggleNestedFolders, openNestedFolder }) => {
    const [inputValue, setInputValue] = useState('');
    const [isCreate, setIsCreate] = useState(false);
    const [isCreateFile, setIsCreateFile] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleBlur = () => {
        if (isEdit) {
            dispatch(dataSliceActions.changeName({ name: inputValue, id }))
            setIsEdit(false);
            return;
        }
        if (isCreate) {
            if (inputValue.trim().length > 0) {
                const newId = nanoid();
                dispatch(dataSliceActions.addData({ id, name: inputValue, isFolder: true, newId }))
            }
            setIsCreate(false);
            setInputValue('');
            openNestedFolder(name);
            return;
        }
        if (isCreateFile) {
            if (inputValue.trim().length > 0) {
                const newId = nanoid();
                dispatch(dataSliceActions.addData({ id, name: inputValue, isFolder: false, newId }))
            }
            setIsCreateFile(false);
            setInputValue('');
            openNestedFolder(name);
            return;
        }
    }

    const setIsCreateTrue = () => {
        setIsCreate(true);
    }
    const setIsCreateFileTrue = () => {
        setIsCreateFile(true);
    }
    const setIsEditTrue = () => {
        setInputNameOnEdit();
        setIsEdit(true);
    }

    const setInputNameOnEdit = () => {
        setInputValue(name);
    }

    return (
        <>
            <div className="flex folder-container">
                <div className="flex" onClick={() => { toggleNestedFolders(name) }}>
                    <span role="image" aria-label="folder">📂</span>
                    {
                        isEdit ? <Input inputValue={inputValue} handleChange={handleChange} handleBlur={handleBlur} /> : <span>{name}</span>
                    }
                </div>
                <EditOptions id={id} setIsCreateTrue={setIsCreateTrue} setIsCreateFileTrue={setIsCreateFileTrue} setIsEditTrue={setIsEditTrue} />
            </div>
            {(isCreate || isCreateFile) && <Input inputValue={inputValue} handleChange={handleChange} handleBlur={handleBlur} />}
        </>
    );
}

export default Folder;
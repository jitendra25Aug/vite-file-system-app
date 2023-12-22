import { useDispatch } from "react-redux";
import { dataSliceActions } from "../provider/redux/features/dataSlice";

const EditOptions = ({ id, setIsCreateTrue, setIsCreateFileTrue, setIsEditTrue, isFileOptions }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex edit-options">
            {
                !isFileOptions ? (
                    <>
                        <span role="image" aria-label="folder" onClick={setIsCreateTrue}>📂</span>
                        <span role="image" aria-label="file" onClick={setIsCreateFileTrue}>📄</span>
                        <span role="image" aria-label="rename" onClick={setIsEditTrue}>✏️</span>
                        <span role="image" aria-label="delete" onClick={() => { dispatch(dataSliceActions.deleteData({ id })) }}>❌</span>
                    </>
                ) : (
                    <>
                        <span role="image" aria-label="delete" onClick={() => { dispatch(dataSliceActions.deleteData({ id })) }}>❌</span>
                        <span role="image" aria-label="rename" onClick={setIsEditTrue}>✏️</span>
                    </>
                )
            }
        </div>
    );
}

export default EditOptions;
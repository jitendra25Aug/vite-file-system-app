import { createSlice } from "@reduxjs/toolkit";
import { addContent, changeData, removeContent } from "../../../utils/helper";


const initialState = {
    fileSystemData: [
        {
            id: 1,
            name: 'root',
            isFolder: true,
            children: [
                {
                    id: 2,
                    name: 'public',
                    isFolder: true,
                    children: [
                        {
                            id: 3,
                            name: 'public.json',
                            isFolder: false,
                            children: []
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'src',
                    isFolder: true,
                    children: [
                        {
                            id: 5,
                            name: 'package.json',
                            isFolder: false,
                            children: []
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'public.js',
                    isFolder: false,
                    children: []
                },
            ]
        }
    ]
};

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        changeName(state, action) {
            const { name, id } = action.payload;
            state.fileSystemData = changeData([...state.fileSystemData], name, id);
        },
        addData(state, action) {
            const { id, name, isFolder, newId } = action.payload;
            state.fileSystemData = addContent([...state.fileSystemData], name, id, isFolder, newId);
        },
        deleteData(state, action) {
            const { id } = action.payload;
            state.fileSystemData = removeContent([...state.fileSystemData], id);
        }
    }
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice;
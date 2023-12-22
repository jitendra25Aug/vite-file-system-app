import Folder from "./Folder";
import File from "./File";
import { useState } from "react";

const FileSystemContainer = ({ data }) => {
    const [showNestedFolders, setShowNestedFolders] = useState({});
    const toggle = (folderName) => {
        setShowNestedFolders({ ...showNestedFolders, [folderName]: !showNestedFolders[folderName] });
    }

    const openNestedFolder = (folderName) => {
        setShowNestedFolders({ ...showNestedFolders, [folderName]: true });
    }
    return (
        <div className="margin-folder">
            {
                data.map((parent) => {
                    return <div key={parent.id}>
                        {/* Rendering Folders */}
                        {parent.isFolder && <Folder name={parent.name} id={parent.id} toggleNestedFolders={toggle} openNestedFolder={openNestedFolder} />}
                        {/* Rendering Files */}
                        {!parent.isFolder && <File name={parent.name} id={parent.id} />}
                        <div style={{ display: `${showNestedFolders[parent.name] ? 'block' : 'none'}` }}>
                            {parent.children && <FileSystemContainer data={parent.children} />}
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default FileSystemContainer;
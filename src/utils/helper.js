export const changeData = (arr, name, id) => {
    arr.forEach((item) => {
        if (item.id === id) {
            item.name = name;
        } else {
            changeData(item.children, name, id);
        }
    });
    return arr;
}

export const addContent = (arr, name, id, isFolder, newId) => {
    arr.forEach((item) => {
        if (item.id === id) {
            item.children.unshift({
                id: newId,
                name,
                isFolder,
                children: []
            });
        } else {
            addContent(item.children, name, id, isFolder, newId);
        }
    });
    return arr;
}

export const removeContent = (arr, id) => {
    arr.forEach((item, i, arrayInside) => {
        if (item.id === id) {
            arrayInside.splice(i, 1);
        } else {
            removeContent(item.children, id);
        }
    });
    return arr;
}
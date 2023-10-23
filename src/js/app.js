function orderByProps(obj,arr) {
    tempArr = Object.entries(obj);
    const tempObj = [];
    tempArr.forEach(elem => {
        tempObj.push(Object.assign({}, elem));
    });
    return tempObj;
}

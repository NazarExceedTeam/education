function searchString(obj) {
    let result = "";
    for (let key in obj){
        if (obj[key] === '' || obj[key] === null || obj[key] === undefined){
            continue;
        }
        if (result != ""){
            result = result + "&";
        }
        result = result + key + "=" + obj[key];
    }
    if (result != ""){
        result = "?" + result;
    }
    return result;
}

window.searchString = searchString;

export default searchString;

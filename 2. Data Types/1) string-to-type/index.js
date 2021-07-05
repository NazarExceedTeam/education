function stringToType(str) {
    let result = str;
    if (result === "undefined"){
        return undefined;
    } else if (result === "null"){
        return null;
    } else if(result === "") {
        return "";
    } else if(result === "false") {
        return false;
    } else if(result === "true") {
        return true;
    } else {
        if (parseInt(result, 10)==result) {
            return parseInt(result, 10);
        } else {
            return result;
        }
    }
};

window.stringToType = stringToType;

export default stringToType;

function isEqual(a, b) {
    if (a === b){
        return true;
    }
    if ((a === "{}") && (b === "{}")){
        return true;
    }
    if (a === null){
        return b === null;
    }
    if ((typeof a == "object") && (typeof b == "object" )){
        if (Object.keys(a).length !== Object.keys(b).length){
            return false;
        } else {
            if ((Object.values(a)[0] === undefined) && (Object.values(b)[0] === undefined)){
                return Object.keys(a)[0] === Object.keys(b)[0];
            }
            if (Object.entries(a) === Object.entries(b)){
                return true;
            }
            if ((Object.keys(a)[0] === Object.keys(b)[1]) && (Object.keys(a)[1] === Object.keys(b)[0])){
                return ((Object.values(a)[0] === Object.values(b)[1]) && (Object.values(a)[1] === Object.values(b)[0]));
            }
        }
    }
    return JSON.stringify(a) == JSON.stringify(b);
}
window.isEqual = isEqual;
export default isEqual;

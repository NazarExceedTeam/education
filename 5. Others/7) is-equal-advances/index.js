function isEqualAdvances(a, b) {
    if (a === b) {
        return true;
    }
    if ((a === null) || (b === null)){
        return a===b;
    }
    if ((a === undefined) || (b === undefined)){
        return Object.values(a)[0] === Object.values(b)[0];
    }
    if ((typeof a == "object") && (typeof b == "object" )){
        if (Object.keys(a).length !== Object.keys(b).length){
            return false;
        } else {
            if (Object.keys(a)[0] === Object.keys(b)[0]){
                if (typeof Object.values(a)[0] === "object" && Object.values(a)[0] !== null){
                    a = Object.values(a)[0];
                    b = Object.values(b)[0];
                }
                if ((Object.values(a)[0] === Object.values(b)[0])){
                    return true;
                }
            }
            return false;
        }
    }
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;

window.isEqual = isEqual;

function isEqual(a, b) {

    if (a === b){
        return true;
    }
    if ((a === "{}") && (b === "{}")){
        return true;
    }
    if ((typeof a == "object") && (typeof b == "object" )){
        if (Object.keys(a).length !== Object.keys(b).length){
            return false;
        } else {
            if (Object.entries(a)===Object.entries(b)){
                return true;
            }
            let a_keys = [];
            let b_keys = [];
            let a_values = [];
            let b_values = [];
            a_keys = Object.keys(a);
            b_keys = Object.keys(b);
            a_values = Object.values(a);
            b_values = Object.values(b);
            for (let i in a_keys.length){
                for (let j in b_keys.length){
                    if ((a_keys[i] === b_keys[j]) && (a_values[i] === b_values[j])){
                        return true;
                    }
                }
            }

        }
    }


    //Object.is(a ,b);
    //JSON.stringify(a) == JSON.stringify(b);
    // return true;
    // return Object.is(a ,b);



}

export default isEqual;

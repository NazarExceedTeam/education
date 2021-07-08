// import queryToObject from '2. Data Types/1) string-to-type';

function queryToObject(query) {
    let result = {};
    if (query === "" || query === "?"){
       return result;
    }
    query.split('&').forEach(function(sting) {
        let sub_arr = sting.split('=');
        if (sub_arr[0].charAt(0) === '?'){
            sub_arr[0] = sub_arr[0].slice(1);
        }
        result[sub_arr[0]] = stringToType(sub_arr[1])
    });

    return result;
};

function stringToType(str) {

    switch (str){
        case "undefined":
            return undefined;
        case "null":
            return null;
        case "":
            return "";
        case "true":
            return true;
        case "false":
            return false;
        default:
            const num = Number(str);
            if (!isNaN(num)) {
                return num;
            } else {
                return str;
            }
    }

};

window.queryToObject = queryToObject;

export default queryToObject;

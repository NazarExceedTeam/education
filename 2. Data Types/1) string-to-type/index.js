function stringToType(str) {

    switch (str){
        case "undefined": return undefined;
        case "null": return null;
        case "": return "";
        case "true": return true;
        case "false": return false;
        default:
            if (parseInt(str, 10)==str) {
                return parseInt(str, 10);
            } else {
                return str;
            }
    }

};

window.stringToType = stringToType;

export default stringToType;

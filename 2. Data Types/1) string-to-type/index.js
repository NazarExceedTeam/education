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

window.stringToType = stringToType;

export default stringToType;

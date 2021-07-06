function queryToObject(query) {
    console.log(query.split('&').split('&'))
    let str=query;
    if (str.isArray()){
        console.log("is array - true");
        let obj='';
        for(let i = 0; i < str.length; i++){
            console.log("inside for, i="+i);
            switch (str[i]) {
                case '?': continue;
                case '&': obj=+', '; continue;
                case '=': obj=+': '; continue;
                default: switch (str[i]){
                    case (!Number.isNaN(str[i]) && (str[i + 1] === ',') || (str[i-1] === ':')): obj=+str[i];
                    default: obj=+str[i];
                }
            }
        }
        console.log('{' + obj + '}');
    }

    return stringToType(str);
};

window.queryToObject = queryToObject;

export default queryToObject;

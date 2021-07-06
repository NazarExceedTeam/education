function findPair(arr) {
    let check_arr = [];
    for (let i = 0; i < arr.length; i++){
        if (check_arr.length === 0){
            check_arr.push(arr[i]);
            continue;
        } else {
            for (let j = 0; j < check_arr.length; j++){
                if (arr[i] === check_arr[j]){
                    return arr[i];
                }
            }
            check_arr.push(arr[i]);
        }
    }
    return null;
};

window.findPair = findPair;

export default findPair;

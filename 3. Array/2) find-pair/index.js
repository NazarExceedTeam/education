function findPair(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] === arr[j]) && (i!==j)) {
                return arr[i];
            }
        }
    }
    return null;
};

window.findPair = findPair;

export default findPair;

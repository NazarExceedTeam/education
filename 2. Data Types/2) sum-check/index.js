function sumCheck(a, b) {
        if (a === isNaN || b === isNaN){
            return NaN;
        }
        if (typeof a === 'number' && typeof b === 'number'){
            return  a + b;
        } else {
            throw "Wrong arguments type!";
        }
}

window.sumCheck = sumCheck;

export default sumCheck;

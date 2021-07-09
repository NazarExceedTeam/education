function rowZero(str) {
    let strArray = str.split('');
    let max = 0;
    let current_max = 0;
    strArray.forEach((currVal) => {
        if (currVal == 0) {
            current_max++;
        } else {
            current_max = 0;
        }
        if (current_max > max) {
            max++;
        }
    } );
    return max;
}

window.rowZero = rowZero;

export default rowZero;

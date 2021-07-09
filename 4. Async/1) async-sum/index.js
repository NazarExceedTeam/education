function asyncSum(a, b) {
    let prom = new Promise((resolve, reject) => {
        if (!(Number.isInteger(a) || isNaN(a)) && Number.isInteger(b)) reject(new Error("Error"));
        setTimeout(() => {
                resolve (a+b)}, 1000);
    })
    return prom;
}

window.asyncSum = asyncSum;

export default asyncSum;
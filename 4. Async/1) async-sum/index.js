function asyncSum(a, b) {
    let prom = new Promise(function (resolve, reject) {

        let bool = (Number.isInteger(a) || isNaN(a)) && Number.isInteger(b);
        console.log(`${a} and ${b} isNaN = ${bool}`);
        setTimeout(() => {if (bool){
                resolve (a+b);
            } else {
                reject(new Error("Error"));
            }
        }, 1000);
    })
    return prom;
}

window.asyncSum = asyncSum;

export default asyncSum;
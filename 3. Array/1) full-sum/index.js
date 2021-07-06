function fullSum(...args) {
    if (args.length === 0){
        return 0;
    }
    let summ = 0;
    console.log(args)
    for (let i=0; i < args.length; i++){
        if (Number.isNaN(args[i])){
            return NaN;
        }
        console.log(typeof args[i])
        if (typeof args[i] === "number"){
            summ = summ + args[i];
        } else {
            throw "Wrong arguments type!";
        }
  }
    return summ;
}

window.fullSum = fullSum;

export default fullSum;

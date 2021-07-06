function arraysSort(arr) {
    let a=arr.slice();

    if (a.length <= 1){
        return a;
    }
    console.log(a)
    let sorted = false;
    let i = 0;
    while (true){
        if (i === a.length-1){
            i = 0;
            if (sorted){
                break;
            }
            sorted = true;
        }
        if (max(a[i]) > max(a[i+1])){
            sorted=false;
            let cache=a[i];
            a[i]=a[i+1];
            a[i+1]=cache;
        }
        i++;
    }
    console.log(a);
    return a;

    function max(a){
        let max=a[0];
        for (let i = 1; i < a.length; i++){
            if (max < a[i]){
                max = a[i];
            }
        }
        return max;
    }
};

window.arraysSort = arraysSort;

export default arraysSort;

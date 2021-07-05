function isEqual(a, b) {



    return JSON.stringify(a) == JSON.stringify(b);
}

window.isEqual = isEqual;

export default isEqual;

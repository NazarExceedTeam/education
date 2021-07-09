function xhrGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            reject(xhr.response)
        };
        xhr.send()
    })
}

window.xhrGet = xhrGet;

export default xhrGet;


// console.log("Promise has been created!")
// let servConn = new XMLHttpRequest();
// console.log(`Connecting to server... URL: ${url}`);
// servConn.open("GET", url, true);
// console.log("Connection opened!")
// servConn.send();
// console.log("Request sent!")
// servConn.load();
// console.log(`URL =  "${url}"`);
// console.log(`Status =  "${servConn.statusText}"`);
// console.log(`Response = "${servConn.responseText}"`);
// if (servConn.status >= 200 && servConn.status < 300) resolve (servConn);
// reject (new Error(servConn.statusText));
// console.log(prom);

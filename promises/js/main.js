// A JS Promise
const newPromise = new Promise((resolve, reject) => {
    let x = 2 + 2;
    if (x == 1) {
        resolve('success')
    } else {
        reject('failure')
    }
});

newPromise.then((resolve) => {
    console.log(`${"The equation was a"} ${resolve}` );
}).catch((reject) => {
    console.log(reject);
})
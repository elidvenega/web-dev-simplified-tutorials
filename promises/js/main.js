// A JS Promise
const newPromise = new Promise((resolve, reject) => {
    if (1 == 1) {
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
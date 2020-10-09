function resolvedPromise()
{
    return new Promise(resolve =>
    {
        setTimeout(() => {
            resolve({'message' : 'delayed success!'})
        }, 500);
    })
}

function rejectedPromise()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error' : 'delayed exception!'})
        }, 500);
    })
}

resolvedPromise().then(value => {
    console.log(value);
});
rejectedPromise().catch(reason => {
    console.log(reason);
});
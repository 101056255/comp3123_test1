const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const arrayOut = [];

lowerCaseWords(mixedArray);

let promise = new Promise((resolve, reject) =>
{
    if(arrayOut.length !== 0)
    {
        resolve('Output: ');
    }
    else
    {
        reject('No string found');
    }
})

promise.then(value => {
  console.log(value);
  console.log(arrayOut)
}).catch(reason =>
{
    console.log(reason);
})

function lowerCaseWords(array)
{
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'string')
        {
            arrayOut.push(array[i].toLowerCase());
        }
    }
}
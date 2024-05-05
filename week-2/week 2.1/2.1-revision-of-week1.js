//*  week 1 revision 
//^ There are 3 big humps in full stack
//^ 1. Async nature of JSON
//^ 2. React
//^ 3. JS to TS


//* 1. Callbacks

function sq(n){
    return n*n;
}
function cb(n){
    return n*n*n;
}

// *functional arguments 
function sumOfSomething(a , b ,fun){
    const n1 = fun(a)
    const n2 = fun(b)
    return n1+n2;
}
// console.log(sumOfSomething(2,2,sq));
// console.log(sumOfSomething(2,2,cb));

//* 2. Async function 


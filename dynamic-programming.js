/**
  _____ _  _                                _   _____                           _           
 |  ___(_)| |__   ___  _ __   __ _  ___ ___(_) | ____|_  ____ _ _ __ ___  _ __ | | ___  ___ 
 | |_  | || '_ \ / _ \| '_ \ / _` |/ __/ __| | |  _| \ \/ / _` | '_ ` _ \| '_ \| |/ _ \/ __|
 |  _| | || |_) | (_) | | | | (_| | (_| (__| | | |___ >  < (_| | | | | | | |_) | |  __/\__ \
 |_|   |_||_.__/ \___/|_| |_|\__,_|\___\___|_| |_____/_/\_\__,_|_| |_| |_| .__/|_|\___||___/
                                                                         |_|                      
 */
//recursive
function fibo(num) {
    let result;
    if (num === 1 || num === 2) {
        result = 1;
    } else {
        result = fibo(num - 1) + fibo(num - 2);
    }
    return result

}
let startTime = new Date();
console.log(fibo(20))
let endTime = new Date(),
    completionTime = (endTime.getTime() - startTime.getTime()) / 1000;
console.log(`Completion time: ${completionTime}`)


//memoization
let memo = new Array();
function memoFibo(num) {
    if (memo[num] != null) {
        return memo[num];
    }

    if (num === 1 || num === 2) {
        result = 1;
    } else {
        result = fibo(num - 1) + fibo(num - 2);
    }
    memo[num] = result
    return result
}
startTime = new Date();
console.log(memoFibo(20))

endTime = new Date();
completionTime = (endTime.getTime() - startTime.getTime()) / 1000;
console.log(`Completion time: ${completionTime}`)


//bottom-up approach
function bottomUpFib(num) {
    if (num === 1 || num === 2) {
        return 1;
    }

    let bottomUpArr = new Array(num + 1);
    bottomUpArr[1] = 1;
    bottomUpArr[2] = 1;

    for (let i = 3; i <= num; i++) {
        bottomUpArr[i] = bottomUpArr[i - 1] + bottomUpArr[i - 2];
    }

    return bottomUpArr[num];
}

startTime = new Date();
console.log(bottomUpFib(1000))
endTime = new Date()
completionTime = (endTime.getTime() - startTime.getTime()) / 1000;
console.log(`Completion time: ${completionTime}`)

/**
 * End Fibo Examples
 */
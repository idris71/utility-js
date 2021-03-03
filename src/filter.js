const tail = require('./tail');

const filter = (arr,filterFunction,resultArr=[]) => {
    if(arr.length==0) return resultArr;

    else{
        const temp = filterFunction(arr[0]);
        if(temp)
            resultArr.push(arr[0]);
        arr=tail(arr);
        return filter(arr,filterFunction,resultArr);
    }
}

module.exports=filter;
const tail = require('./tail');
const reduce = (arr,reducerFunction,initialValue,result) => {
    if(arr.length==0){
        if(result==undefined)
            return initialValue;
        else if(initialValue==undefined)
            return result;
        else
            return initialValue+result;    
    }

    else{
        if(result==undefined)
            result='';
        result=reducerFunction(result,arr[0]);
        arr=tail(arr);
        return reduce(arr,reducerFunction,initialValue,result);

    }
}
module.exports=reduce;
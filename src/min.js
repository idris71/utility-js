const tail=require('./tail');
const min = (arr,result) =>{
    if(arr.length==0)
        return result;
    else{
        if(result==undefined)
            result=arr[0];
        else if(result>=arr[0])
            result=arr[0];

        arr=tail(arr);
        return min(arr,result);
    }
}
module.exports=min;
const tail=require('./tail');
const map = (arr,mapFunction,resultArr=[]) => {
    if(arr.length==0) return resultArr; //base case 
    else{    
        resultArr.push(mapFunction(arr[0])); //applying funciton on first element
        arr=tail(arr); //removing first element
        return map(arr,mapFunction,resultArr); //recursive call for rest of the array elements
    }
}
module.exports=map;
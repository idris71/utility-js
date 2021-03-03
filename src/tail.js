const tail = (inputList) => {
    if(inputList.length==0)
        return [];
    else{
        inputList.shift();
        return inputList;
    }
}
module.exports=tail;
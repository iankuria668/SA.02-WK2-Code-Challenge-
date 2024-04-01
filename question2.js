function arrayGenerator(num1,num2){
    const array = [];
    if (num1 < num2){
        for (let i=num1; i<=num2; i++){
            array.push(i)
        }
    } else{
        for(let i=num1; i>=num2;i--){
            array.push(i)
        }
    }
    return array;
}
console.log(arrayGenerator(1,7));
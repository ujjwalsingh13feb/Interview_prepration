let latters = ['a','b','a','a','d','b','c','b','d','e','f','g','g','h','f'];




function uniqeNumber(arr){
    let obj = {};
    arr.forEach((element)=>{
        if(!obj[element]){
            obj[element] =1
        }else{
            obj[element]++
        }
    })
        
     return obj
}

let result =uniqeNumber(latters)

console.log(result)
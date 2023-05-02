let latters = ['a','b','a','a','d','b','c','b','d','e','f','g','g','h','f'];




// function uniqeNumber(arr){
//     let obj = {};
//     arr.forEach((element)=>{
//         if(!obj[element]){
//             obj[element] =1
//         }else{
//             obj[element]++
//         }
//     })
        
//      return obj
// }

// let result =uniqeNumber(latters)

// console.log(result)

// second way to do the same question

function unNumber(arr){
  let obj = {};
for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]++
    }
}
return obj
}

let resu = unNumber(latters);

console.log(resu)
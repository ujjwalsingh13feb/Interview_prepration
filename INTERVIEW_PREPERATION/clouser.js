// In other words, a closure gives you access to an 
// outer function's scope from an inner function

// or
// A closure is the combination of a function bundled together (enclosed)
//  with references to its surrounding state (the lexical environment).

  let name = "Globle Scope"
  
  function clouserName(){
    let name2= "Middle Scope";
    function innerClouserName(){
        let name3 = "Local Scope";
        let output = name+" "+" "+name2+" "+name3;
        return output
    }
    return innerClouserName()
  }

  let result = clouserName()

  console.log(result)
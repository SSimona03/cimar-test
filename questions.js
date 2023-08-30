//Write a function to reverse a string
function Reverse(text){
    let reverse = "";
    for(let i = text.length-1; i >= 0; i--){
      reverse += text[i]
    }
    
    return reverse;
  }
  

  // Given a sentence, capitalize every third letter
  function thirdLetter(text){
  let nr = 0;
  let newText = "";
  
  for(let i=0; i< text.length; i++){
    //if the letter is not a space then add 1
    if(text[i] !== " "){
      nr += 1
      //if number is multiple of 3 then make letter capitalize
    }if(nr % 3 == 0){
    newText += text[i].toUpperCase();
           console.log("here")
  }else{
    //if the numerb is not multiple of 3 then add the char
    newText += text[i]
  }
}
   return newText;
}


// Write a function that takes in an array of numbers and returns the largest number, do this without using any math library methods (no Math.max etc)
function MaxNumber(arr){
  let nr = arr[0];
  
  for(let i=0; i< arr.length-1 ; i++){
    //if the first number is > then second number 
    if(arr[i] > arr[i+1]){
      //and if the nr is less then the second number, set nr to first number
      if(nr < arr[i]){
        nr = arr[i]
      }
    //if the number is less then second number then set to second number
    }else if(nr < arr[i+1]){
      nr = arr[i+1]

    }
  }
  return nr
}


// Write a function that takes in an array of strings and returns unique strings (removes duplicates)
function Unique(arr){
  const object = {};

  for (let i = 0; i < arr.length; i++) {
    //this will assign to the name and the position were it is
    object[arr[i]] = i+1; 
  }
    //gives the unique array with  Object.keys that gets an array with all the keys properties from the object
    const newArr= Object.keys(object); 
  
    return newArr
}


//write a function that takes an object as an argument and returns the number of properties it has
function objectProp(obj){
  return  Object.keys(obj).length
}


// Write a one-line function that doubles the value of each item in an array
const Double = (arr) => {
  //takes an arry and then maps and doubles each element 
  return arr.map(item => item * 2);
}

//Write a one-line function that removes all odd numbers from an array
const JustEven = (arr)=>{
  //filters each element if is mod 2 = 0
  return arr.filter(item=> item % 2==0)
}


//Write a rate-limited for()loop, that waits 5 seconds after every 25 iterations
setTimeout(() => {  for(let i =0; i<26; i++){
    console.log(i)
  }}, 5000);




  //code challendge
  function Wave(str){
    //I make a new string because I want to revert back to original after each iteration
  let newString = str;
  //capture the output
  let string = []
  for(let i =0; i<str.length; i++){
    if(str[i] !== " "){
      //replacing the letter with it's caps
   let change =   newString.replace(newString[i], newString[i].toUpperCase())
     string.push(change)
    }
    newString = str;
    
  }
  return string
}
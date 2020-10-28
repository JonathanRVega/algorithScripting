// Diff two arrays
console.log("First problem, Diff two arrays");

function diffArray(arr1, arr2) {
    var newArr = [];
    for(var i=0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i])=== -1){
            newArr.push(arr1[i]);
        }
    }
    for(var j=0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j])=== -1){
            newArr.push(arr2[j]);
        }
  }
  return newArr;
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
   ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
   console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
  
   //Convert html entities
  console.log("Second problem, Convert html entities");

  function convertHTML(str) {

    var placeHolder = str.split("");
    for(var i = 0; i<placeHolder.length; i++){
        switch(placeHolder[i]){
            case '<': placeHolder[i]='&lt:';
            break;
            case '>': placeHolder[i]='&gt:';
            break;
            case '&': placeHolder[i]='&amp:';
            break;
            case '"': placeHolder[i]='&quot:';
            break;
            case "'": placeHolder[i]='&apos:';
            break;
        }
    }
    str = placeHolder.join("");
    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  
  //Missing letters
  console.log("Third problem, Missing letters");

  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      
      var code = str.charCodeAt(i);
  
      if (code !== str.charCodeAt(0) + i) {

        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  
  


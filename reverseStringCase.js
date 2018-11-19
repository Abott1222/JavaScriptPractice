function reverseCase(str) {
  let strArray = [...str];
  let reveredCaseArray = strArray.map( (curr, ix) => {
    let currentAscii = curr.charCodeAt(0);
    let diff = 32;
    //check to see if A-Z or a-z
    if((currentAscii >= 65 && currentAscii <= 90) || (currentAscii >= 97 && currentAscii <= 122)) {
      return  (currentAscii <= 90 ? String.fromCharCode(currentAscii + diff) : String.fromCharCode(currentAscii - diff));
    } else { 
      return curr; 
    }
  });
  return reveredCaseArray.join("");
}

reverseCase("hElLo world");

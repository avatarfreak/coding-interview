function permAlone(str) {
  let number = 0;
  const count = Array(str.length).fill(true); //keep track of used character true is not used;
  const depth = 0; //level of stage
  const result = Array(str.length); //hold all the premutation arrangement
  permuate(str, count, result, depth);

  function permuate(str, count, result, depth) {
    const checkDuplicate = /([a-z])\1/g;
    //if length of dept is same as length result;
    //and no same character is repeated in consecutive order
    //increase number
    if (result.length == depth && !checkDuplicate.test(result.join(""))) {
      //console.log(result.join(""))
      number++;
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (count[i] == false) {
        continue;
      }
      result[depth] = str[i];
      count[i] = false;
      permuate(str, count, result, depth + 1);
      count[i] = true; //backtracking;
    }
  }

  return number;
}

 permAlone("aab");

module.exports = permAlone;
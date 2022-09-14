function reverseWords(str){
    const arr = str.split(" ");
    let newStr = []
    for (i = (arr.length)-1; i >= 0; i--){
      newStr.push(arr[i]);
    }
    return newStr.join(" "); // reverse those words
  }
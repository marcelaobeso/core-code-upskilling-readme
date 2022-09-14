function oddOrEven(array) {
    let a = 0;
    for(let i = 0; i < array.length; i++){
      a += Number(array[i]); 
    }
    if(a % 2 == 0 || a % 2 == -0){
      return "even";
    }else{
      return "odd";
    }
  }
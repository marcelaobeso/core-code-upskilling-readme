const ensureQuestion = (s) => {
    const x = s.split("");
    const len = (x.length)-1;
    if (x[len] == "?"){
      return(s)
    }else{
      return (s + "?")
    }
  }
function tribonacci(signature,n){
  
    let startFiboSequence = signature;

    if(n === 0) {
    return [];
    } else if(n == 1) {
        startFiboSequence.pop();
        startFiboSequence.pop();
        return startFiboSequence;
    } else if(n === 2) {
        startFiboSequence.pop();
        return startFiboSequence;
    } else {
     
      for(let i = 3; i < n; i++) {
        startFiboSequence.push((startFiboSequence[i - 1]) + (startFiboSequence[i - 2]) + (startFiboSequence[i - 3]));
      }
    }

    return startFiboSequence;
    
  }
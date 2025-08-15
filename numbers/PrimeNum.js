const PrimeNum = (num) => {
    let value = num
    let isFact = true

    for (let i = 2; i <= value/2; i++){
         if (value %i == 0){
            isFact = false
            break;
         }
    }

    if (isFact) {
        console.log(value + " is a factorial number")
    }
    else {
        console.log(value + " is not a factorial number")
    }
}

PrimeNum(13)
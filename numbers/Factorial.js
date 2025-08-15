const factorial = (num) => {
    let value = num
    let factVal = 1

    for (let i = 1; i < num; i++) {
        factVal += factVal * i
    }

    console.log("Factorial of " + num + " is : " + factVal)
}

factorial(5)
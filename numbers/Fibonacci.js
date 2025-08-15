const Fibonacci = (num) => {
    let value = num
    let first = 0
    let second = 1

    console.log("Fibonacci series till " + value + " is : ")
    for (let i = 0; i < value; i++){
        console.log(first + " ")
        let temp = first + second
        second = first
        first = temp
    }
}

Fibonacci(10)
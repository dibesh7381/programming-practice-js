const swap = (num1,num2) => {
    num1 = num1 + num2
    num2 = num1 - num2
    num1 = num1 - num2

    console.log(num1)
    console.log(num2)
}

swap(10,23)


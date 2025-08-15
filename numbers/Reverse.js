const Reverse = (num) => {
    let value = num
    let revValue = 0

    while (num > 0){
        let digit = num % 10
        revValue = revValue * 10 + digit
        num = Math.floor(num / 10)
    }

    console.log("Original value is " + value)
    console.log("Reversed value is " + revValue)
}

Reverse(2398273827)
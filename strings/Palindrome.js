const Palindrome = (name) => {
    let value = name
    let revValue = ""

    for (let i = value.length; i >= 0; i--) {
        revValue += value.charAt(i)
    }

    if (value === revValue){
        console.log(value + " is a palindrome String")
    }
    else {
        console.log(value + " is not a palindrome String")
    }
}

Palindrome("level")
Palindrome("hari")
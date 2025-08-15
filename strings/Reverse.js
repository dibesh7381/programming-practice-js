const Reverse = (name) => {
    let value = name
    let revValue = ""

    for (let i = value.length; i >= 0; i--) {
        revValue += value.charAt(i)
    }

    console.log("Original value is " + value)
    console.log("Reverse value is " + revValue)
}

Reverse("Dibesh")
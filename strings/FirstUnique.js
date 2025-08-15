const isUnique = (str) => {
    let value = str

    for (let i = 0; i < value.length; i++) {
        let ch = value.charAt(i)
        let isUnique = true

        for (let j = 0; j < value.length; j++) {
           if (i != j && value.charAt(j) == ch){
               isUnique = false
               break
           }
        }

        if (isUnique){
            console.log("First unique value is : " + ch)
            return
        }
    }

    console.log("No unique value is found")

}

isUnique("aaabccd")
const isAnagram = (str1,str2)  => {
   if (str1.length !== str2.length){
      return false
   }

   let used = []

   for (let i = 0; i < str2.length; i++) {
      used[i] = false
   }

   for (let i = 0; i < str1.length; i++) {
       let found = false

       for (let j = 0; j < str2.length; j++) {
           if (str1[i] === str2[j] && !used[j]){
               used[j] = true
               found = true
               break
           }
       }

       if (!found){
         return false
       }
   }

   return true
}

console.log(isAnagram("listen","silent"))


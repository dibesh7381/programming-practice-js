const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();

  let isPangram = true

  for (let i = 0; i < alphabet.length; i++) {
    const char = alphabet[i];
    if (!lowerStr.includes(char)) {
       isPangram = false;
       break;
    }
  }

  if (isPangram) {
     console.log(lowerStr + " is a pangram string")
  }
  else {
    console.log(lowerStr + " is not a pangram string")
  }

};


isPangram("Pack my box with five dozen liquor jugs")
isPangram("Hello Boys")

const FindLength = (value) => {
    let item = value
    item = item.replace(/\s/g, '').length;
    console.log(value + " have " + item + " word")
}

FindLength("  w hddwqbw  bjbxjb   ")
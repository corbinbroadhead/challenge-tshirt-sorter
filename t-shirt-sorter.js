const tShirtSorter = (str) => {
    let stackS = [];
    let stackM = [];
    let stackL = [];
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar === 's') {
            stackS.push(currentChar);
            continue;
        }
        if (currentChar === 'm') {
            stackM.push(currentChar);
            continue;
        }
        if (currentChar === 'l') {
            stackL.push(currentChar);
            continue;
        }
    }
    let solution = `${stackS.join('')}${stackM.join('')}${stackL.join('')}`;
    if (solution === '') {
        solution = "(looks like there were no valid entries)";
    }
    return console.log(solution);
}

tShirtSorter('smslml');
tShirtSorter('hi');
tShirtSorter('slmfalkgnsklaknglksnfmakmslgijawlefjlaskmdlah');

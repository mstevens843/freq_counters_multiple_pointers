// problem requires checking the frequency of digits in two numbers. 

function sameFrequency(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString(); 

    if (num1Str.length !== num2Str.length) return false; 

    let num1Freq = createFrequencyCounter(num1Str);
    let num2Freq = createFrequencyCounter(num2Str); 


    for (let key of num1Freq.keys()) {
        if (num1Freq.get(key) !== num2Freq.get(key)) return false; 
    }

    return true; 
}

module.exports = sameFrequency; 
function constructNote(message, letters) {
    let letterFreqs = createFrequencyCounter(letters); 
    let messageFreqs = createFrequencyCounter(message); 

    for(let char of messageFreqs.keys()) {
        if (!letterFreqs.has(char) || letterFreqs.get(char) < messageFreqs.get(char)) {
            return false;
        }
    }
    return true; 
}

module.exports = constructNote; 
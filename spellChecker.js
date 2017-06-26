function SpellChecker(words) {
    this.words = words;
}

SpellChecker.prototype.check = function (toCheck) {
    if (toCheck) {
        return this.words.indexOf(toCheck.toLowerCase()) > -1;
    }
    else {
        return true;
    }
};
    
SpellChecker.prototype.isDictionaryEmpty = function () {
    return this.words.length < 1;
};
    
module.exports = SpellChecker;

var SpellChecker = (function () {
    
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
    
    SpellChecker.prototype.dictionaryLength = function () {
        return this.words.length();
    }
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;
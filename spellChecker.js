var SpellChecker = (function () {
    
    function SpellChecker(words) {
        this.words = words;
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        if (toCheck) {
            return this.words.indexOf(toCheck) > -1;
        }
        else {
            return true;
        }
    };
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;
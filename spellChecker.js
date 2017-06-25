var BitSet = require("bitset.js");

var SpellChecker = (function () {
    
    function SpellChecker(words) {
        this.words = words;
        this.bs = new BitSet();
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        if (toCheck) {
            return this.words.indexOf(toCheck.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    };
    
    this.isDictionaryEmpty = function () {
        return this.words.length> 0;
    };
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;

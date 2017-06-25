var BitSet = require("bitset.js");

var SpellChecker = (function () {
    
    function SpellChecker(words) {
        this.words = words;
        this.wordsHash = hashTheWords(words);
    }
    
    SpellChecker.prototype.check = function (toCheck) {
        if (toCheck) {
            return this.words.indexOf(toCheck.toLowerCase()) > -1;
        }
        else {
            return true;
        }
    };
    
    //Hash the word three times to get the indices to set into the bitset
    function hashTheWords(words) {
        var bs = new BitSet();
        for (var i = words.length - 1; i >= 0; i--) {
            var hashIndices = generateHashIndices(words[i]);
            for (var i = hashIndices.length - 1; i >= 0; i--) {
                bs.Set(hashIndices[i], 1);
            }
        }
    }
    
    function generateHashIndices(word) {
        
    }
    
    return SpellChecker;
    
}());

module.exports = SpellChecker;
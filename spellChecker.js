var BitSet = require("bitset.js");
var HashStrategy = require('./hashStrategy');

function SpellChecker(words) {
    this.hashSetAllWords = new BitSet;
    this.hashStrategy = new HashStrategy();
    createTheHashDictionarySoWordsCanDiscarded(this.hashSetAllWords, this.hashStrategy, words);
}

SpellChecker.prototype.check = function (toCheck) {
    if (toCheck) {
        var hashIndices = this.hashStrategy.hashIndices(toCheck.toLowerCase());
        // a simple three index hash, can you tell from the code itself?
        var hash1Set = this.hashSetAllWords.get(hashIndices[0]); 
        var hash2Set = this.hashSetAllWords.get(hashIndices[1]);
        var hash3Set = this.hashSetAllWords.get(hashIndices[2]);
        // very crude test for equivalence.  All need to be set.  2 out out 3 is bad
        return hash1Set && hash2Set && hash3Set;
    }
    else {
        return true;
    }
};
    
SpellChecker.prototype.isDictionaryEmpty = function () {
    return this.hashSetAllWords.isEmpty();
};

function createTheHashDictionarySoWordsCanDiscarded(hashSetAllWords, hashStrategy, words) {
    for (var i = words.length - 1; i >= 0; i--) {
        var hashIndices = hashStrategy.hashIndices(words[i].toLowerCase());
        for (var j = 0; j < hashIndices.length; j++) {
            hashSetAllWords.set(hashIndices[j], 1);   
        }
    }  
}
    
module.exports = SpellChecker;

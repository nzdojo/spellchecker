var BitSet = require("bitset.js");
var HashStrategy = require('./hashStrategy');

function SpellChecker(words) {
    this.hashSetAllWords = new BitSet;
    this.hashStrategy = new HashStrategy();
    for (var i = words.length - 1; i >= 0; i--) {
        var hashIndices = this.hashStrategy.hashIndices(words[i].toLowerCase());
        for (var j = 0; j < hashIndices.length; j++) {
            this.hashSetAllWords.set(hashIndices[j], 1);   
        }
    }    
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
    return this.hashSetAllWords.isEmpty();
};
    
module.exports = SpellChecker;

var md5Hex = require('md5-hex');

var HashStrategy = (function () {
        
    function HashStrategy() {
    }
    
    HashStrategy.prototype.hashIndices = function (toHash) {
        if (!toHash) 
            return [0, 0, 0];
        else {
            // extract bits with without bitwise operators.  Maybe more readable/understandable
            var md5HashAsHexString = md5Hex(toHash); 
            var md5HashAsInteger = parseInt(md5HashAsHexString, 16);
            var md5HashAsStringOfBits = md5HashAsInteger.toString(2);
            //Extract 10 bits at a time.  Will get an index between 0 and 1023
            var hash1BinaryString = md5HashAsStringOfBits.slice(0, 10);
            var hash2BinaryString = md5HashAsStringOfBits.slice(10, 20);
            var hash3BinaryString = md5HashAsStringOfBits.slice(20, 30);
            var hash1Index = parseInt(hash1BinaryString, 2);
            var hash2Index = parseInt(hash2BinaryString, 2);
            var hash3Index = parseInt(hash3BinaryString, 2);
            return [hash1Index, hash2Index, hash3Index];
        }
    };
    
    return HashStrategy;
    
}());

module.exports = HashStrategy;
"use strict";

var assert = require('assert'); 
var async = require('async');
var HashStrategy = require("./hashStrategy");

describe("Hash Strategy Tests", function () {
    
    //1. Module Setup
    
    // 2. Module Exercise

    it('Empty string hashes to zero', function (done) {
        // 1. Setup
        var hashStrategy = new HashStrategy();
        
        // 2. Exercise
        var hashedValue = hashStrategy.hashIndices('');
        
        // 3. Verify
        assert(hashedValue[0] + hashedValue[1] + hashedValue[2]  === 0, 'An empty string hashes to all zeroes');
        
        // 4. Cleanup & Finish
        done();
    });
    
    async.each(["nick", "incredible", "masking", "hilltop", "coast", "boast", "demonination", "it", "towel", "phone", "brickhouse"], function (wordToHash, asyncdone) {
        it('Hashing ' + wordToHash + ' twice, hashes to the same indices.', function (done) {
            // 1. Setup
            var hashStrategy = new HashStrategy();
            
            // 2. Exercise
            var firstHashedValue = hashStrategy.hashIndices(wordToHash);
            var secondHashedValue = hashStrategy.hashIndices(wordToHash);
            
            // 3. Verify
            assert(firstHashedValue[0] === secondHashedValue[0], 'Expecting the same hash value, at first index for word ' + wordToHash);
            assert(firstHashedValue[1] === secondHashedValue[1], 'Expecting the same hash value, at second index for word ' + wordToHash);
            assert(firstHashedValue[2] === secondHashedValue[2], 'Expecting the same hash value, at third inde for word ' + wordToHash);
            
            // 4. Cleanup & Finish
            done();
        });
        asyncdone();
    });
    
});
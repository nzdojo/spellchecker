"use strict";

var assert = require('assert'); 
var SpellChecker = require('./spellChecker');

describe("Spell Checker Tests", function () {

    it('An empty string is a string that is spelt correctly (in our world)', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker();
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'An empty string is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A null is spelt correctly (in our world)', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker();
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check();
        
        // 3. Verify
        assert(isSpeltCorrectly, 'A null is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A word is spelt correctly', function (done) {
        // 1. Setup
        var spellChecker = new SpellChecker();
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('nick');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'A null is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });    

});
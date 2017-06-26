"use strict";

var assert = require('assert'); 
var async = require('async');
var SpellChecker = require('./spellChecker');

// Potential to divide this up into Testcase Class per TestFixture.  It could get big nd unwieldy

describe("Spell Checker Tests", function () {
    
    var words,
        spellChecker;
    
    //1. Module Setup
    
    // Shared Fixture
    before(function () {
        // Words is a Shared Fixture for all tests, needed only once
        words = ["nick", "first", "coffee", "speaker", "allergy", "spouse", "demonination", "it", "pillowcase", "pillow", "snick", "Sauces'"]; 
    });
    
    // Fresh Fixture per test.  
    beforeEach(function () {
        spellChecker = new SpellChecker(words);
    });
    
    // 2. Module Exercise
    
    it('Construction creates the hashset of words', function (done) {
        // 3. Verify
        assert(!spellChecker.isDictionaryEmpty(), 'We passed in words so therefore is should have words in it');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('An empty string is a string that is spelt correctly (in our world)', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'An empty string is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A null is spelt correctly (in our world)', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check(null);
        
        // 3. Verify
        assert(isSpeltCorrectly, 'A null is in fact spelt correctly');
        
        // 4. Cleanup & Finish
        done();
    });
    
    it('A word is spelt correctly', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('nick');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'The word is correct');
        
        // 4. Cleanup & Finish
        done();
    });   
    
    it('A word is spelt correctly, case insensitive', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check('Nick');
        
        // 3. Verify
        assert(isSpeltCorrectly, 'The word is correct');
        
        // 4. Cleanup & Finish
        done();
    }); 
    
    it('A word is spelt incorrectly', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isNotSpeltCorrectly = spellChecker.check('@@@@');
        
        // 3. Verify
        assert(!isNotSpeltCorrectly, 'The word is incorrect, yet it was returned as correct');
        
        // 4. Cleanup & Finish
        done();
    });  
    
    it('A slight variation of a word in the dictionary is spelt incorrectly', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isNotSpeltCorrectly = spellChecker.check('nic');
        
        // 3. Verify
        assert(!isNotSpeltCorrectly, 'The word is incorrect, yet it was returned as correct');
        
        // 4. Cleanup & Finish
        done();
    }); 
    
    it('A slight variation of a word in the dictionary is spelt incorrectly', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isNotSpeltCorrectly = spellChecker.check('nicky');
        
        // 3. Verify
        assert(!isNotSpeltCorrectly, 'The word is incorrect, yet it was returned as correct');
        
        // 4. Cleanup & Finish
        done();
    }); 
    
    it('A word with mixed case and unusual characters', function (done) {
        // 1. Setup
        
        // 2. Exercise
        var isSpeltCorrectly = spellChecker.check("Sauces'");
        
        // 3. Verify
        assert(isSpeltCorrectly, 'The word is correct');
        
        // 4. Cleanup & Finish
        done();
    });
    
    async.each(['xxxx', '!!dd', 'superfreak'], function (wordToCheck, asyncdone) {
        it('These words should not be found. Word ' + wordToCheck, function (done) {
            // 1. Setup
            
            // 2. Exercise
            var notFound = spellChecker.check(wordToCheck);
            
            // 3. Verify
            assert(!notFound, wordToCheck + ' was found in the spellChecker');
            
            // 4. Cleanup & Finish
            done();
        });
        asyncdone();
    });

});
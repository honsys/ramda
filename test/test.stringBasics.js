var assert = require('assert');
var Lib = require('./../ramda');

describe('substring', function() {
    var substring = Lib.substring;

    it('should return the substring of a string', function() {
        assert.equal(substring(2, 5, 'abcdefghijklm'), 'cde');
    });

    it('should be automatically curried', function() {
        var from2 = substring(2);
        assert.equal(from2(5, 'abcdefghijklm'), 'cde');
        var from2to5 = substring(2, 5);
        assert.equal(from2to5('abcdefghijklm'), 'cde');
    });
});

describe('substringFrom', function() {
    var substringFrom = Lib.substringFrom;

    it('should return the trailing substring of a string', function() {
        assert.equal(substringFrom(8, 'abcdefghijklm'), 'ijklm');
    });

    it('should be automatically curried', function() {
        var after8 = substringFrom(8);
        assert.equal(after8('abcdefghijklm'), 'ijklm');
    });
});

describe('substringTo', function() {
    var substringTo = Lib.substringTo;

    it('should return the trailing substring of a string', function() {
        assert.equal(substringTo(8, 'abcdefghijklm'), 'abcdefgh');
    });

    it('should be automatically curried', function() {
        var through8 = substringTo(8);
        assert.equal(through8('abcdefghijklm'), 'abcdefgh');
    });
});

describe('charAt', function() {
    var charAt = Lib.charAt;

    it('should return the character at the nth position of a string', function() {
        assert.equal(charAt(8, 'abcdefghijklm'), 'i');
    });

    it('should be automatically curried', function() {
        var at8 = charAt(8);
        assert.equal(at8('abcdefghijklm'), 'i');
    });
});

describe('charCodeAt', function() {
    var charCodeAt = Lib.charCodeAt;

    it('should return the ascii character at the nth position of a string', function() {
        assert.equal(charCodeAt(8, 'abcdefghijklm'), 105);  // 'a' ~ 97, 'b' ~ 98, ... 'i' ~ 105
    });

    it('should be automatically curried', function() {
        var at8 = charCodeAt(8);
        assert.equal(at8('abcdefghijklm'), 105);
    });
});
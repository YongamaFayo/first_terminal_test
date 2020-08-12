let assert = require("assert");

const allPaarl = require("../allPaarl");

describe('allPaarl', function () {

    it('should return true if registration start with CJ', function () {
        assert.equal("CJ 123,CJ 145,CJ 586", allPaarl('CJ 123,CJ 145,CJ 586'));
    });

    it('should return false if registration does not start with CJ', function () {
        assert.equal(0, allPaarl('CF 123'));
    });


});
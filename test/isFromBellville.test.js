let assert = require("assert");

const isFromBellville = require("../isFromBellville");

describe('isFromBellville', function () {

    it('should return true if registration starts with CY', function () {
        assert.equal(true, isFromBellville('CY 123'));
    });

});
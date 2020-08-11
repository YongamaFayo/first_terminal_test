let assert = require("assert");

const transportFee = require("../transportFee");

describe('transportFee', function () {

    it('should return true for the morning fee', function () {
        assert.equal('R20', transportFee('morning'));
    });

    it('should return true for the afternoon fee', function () {
        assert.equal('R10', transportFee('afternoon'));
    });

    it('should return true for the nightshift fee', function () {
        assert.equal('free', transportFee('nightshift'));
    });

});

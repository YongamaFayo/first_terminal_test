let assert = require("assert");

const fromWhere = require("../fromWhere");

describe('fromWhere', function () {

    it('should return true if registration for Bellville starts with "CY" ', function () {
        assert.equal('Some other place!', fromWhere('bellville'));
    });

    it('should return true if registration for Paarl starts with "CJ" ', function () {
        assert.equal('Some other place!', fromWhere('pAARL'));
    });

    it('should return true if registration for Cape Town starts with "CA" ', function () {
        assert.equal('Some other place!', fromWhere('Cape Town'));
    });

    it('should return true if registration for Cape Town starts with "CA" ', function () {
        assert.equal('Some other place!', fromWhere('Cape Town'));
    });






});
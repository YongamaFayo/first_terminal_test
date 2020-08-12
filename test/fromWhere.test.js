let assert = require("assert");

const fromWhere = require("../fromWhere");

describe('fromWhere', function () {

    it('should return true if registration for Bellville starts with "CY" ', function () {
        assert.equal('Bellville', fromWhere('CY 125'));
    });

    it('should return true if registration for Paarl starts with "CJ" ', function () {
        assert.equal('Paarl', fromWhere('CJ 878'));
    });

    it('should return true if registration for Cape Town starts with "CA" ', function () {
        assert.equal('Cape Town', fromWhere('CA 875'));
    });

    it('should return true if registration for other places starts', function () {
        assert.equal('Some other place!', fromWhere('CC 333'));
    });

    it('should return true if registration is from elsewhere', function () {
        assert.equal('Some other place!', fromWhere('CC 333'));
    });

    it('should recognise if the registration is not from the listed', function () {
        assert.equal('Some other place!', fromWhere('CK 878'));
    });

    it('should assert if the registration is from other place', function () {
        assert.equal('Some other place!', fromWhere('CQ 875'));
    });






});
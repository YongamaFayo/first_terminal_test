let assert = require("assert");


const regCheck = require("../regCheck");

describe('regCheck', function () {



    it('should return false if registration starts with loc', function () {
        assert.equal(false, regCheck('CF 123'));
    });

    it('should return true if registration ends with loc', function () {
        assert.equal(false, regCheck('DC 55 YU GP'));
    });

    it('should return true if registration is not from GP loc', function () {
        assert.equal(false, regCheck('5566 L'));
    });



});




// DC 55 YU GP
// 5566 L
// ERT 123 EC
// FGT 123 MP
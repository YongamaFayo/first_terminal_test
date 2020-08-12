let assert = require("assert");


const regCheck = require("../regCheck");

describe('regCheck', function () {



    it('should return false if registration starts with loc', function () {
        assert.equal(false, regCheck('CF 123'));
    });

    it('should return true if registration ends with loc', function () {
        assert.equal(true, regCheck('DC 55 YU GP', "GP"));
    });

    it('should return true if registration is from L loc', function () {
        assert.equal(true, regCheck('5566 L',"L"));
    });



});




// DC 55 YU GP
// 5566 L
// ERT 123 EC
// FGT 123 MP
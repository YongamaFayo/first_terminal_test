let assert = require("assert");

const totalPhoneBill = require ("../totalPhoneBill");

describe('totalPhoneBill', function(){

    it('should take in a string calls made and sms sent', function (){
        assert.equal('R0.00', totalPhoneBill('7.45'));
    });






})
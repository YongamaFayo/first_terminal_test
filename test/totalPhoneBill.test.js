let assert = require("assert");

const totalPhoneBill = require ("../totalPhoneBill");

describe('totalPhoneBill', function(){

    it('should take in a string of calls made', function (){
        assert.equal('R2.75', totalPhoneBill('call'));
    });

    it('should take in a string of sms sent', function (){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });

    it('should take in a string calls made', function (){
        assert.equal('R8.25', totalPhoneBill('call, call, call'));
    });

    it('should take in a string of sms sent', function (){
        assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });

    it('should take in a string of sms sent and calls made', function (){
        assert.equal('R7.45', totalPhoneBill('call, call, sms, sms, sms'));
    });

    
})
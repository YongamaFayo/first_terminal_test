module.exports = function (house) {

    var price = house.split(", ");
    var call = 2.75;
    var sms = 0.65;
    var total = 0;
    for (var i = 0; i < price.length; i++) {
        if (price[i] == "call") {
            total = total + call;
        } else if (price[i] == "sms") {
            total = total + sms;
        }
    }
    console.log(total);
    return "R" + total.toFixed(2)
}
 






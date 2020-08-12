module.exports = function (name) {


    if (name.startsWith("Sat") || name.startsWith("Sun")) {
        return false;
    }
    else {
        return true;
    }
}




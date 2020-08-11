module.exports = function (reg) {

    var bellville = "CY";

    if (reg.startsWith("CY")) {
        return "Bellville";
    }
    else if (reg.startsWith("CJ")) {
        return "Paarl";
    }
    else if (reg.startsWith("CA")) {
        return "Cape Town";
    }
    else {
        return "Some other place!"
    }
}




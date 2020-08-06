module.exports = function (name) {

    // function yearsAgo(name) {
    // var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    console.log(date.getDay())
    console.log(date.getFullYear());
    //return weekDays[date.getDay()]
    return date.getFullYear() - name
}





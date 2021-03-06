const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let newArr = [];

    if (!Array.isArray(members) || members.length == 0) {
        return false;
    }

    function stringArr(members) {
        for (var i = 0; i < members.length; i++) {
            if (typeof members[i] != "string") {
                continue;
            } else {
                newArr.push(members[i].trim().toUpperCase());
            }
        }
    }
    stringArr(members);
    let firstLet = newArr.map(function (letter) {
        return letter.slice(0, 1);
    });

    let result = firstLet.sort().join("");
    return result;
};
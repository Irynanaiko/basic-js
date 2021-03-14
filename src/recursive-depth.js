const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, rec = 1) {

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let subDepth = this.calculateDepth(arr[i]) + 1;
        if (subDepth > rec) {
          rec = subDepth;
        }
      }
    }
    return rec;

  }
};
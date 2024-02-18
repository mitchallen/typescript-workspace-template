"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
var core_1 = require("@mitchallen/core");
function add(a, b) {
    (0, core_1.log)("add function");
    return a + b;
}
exports.add = add;
function subtract(a, b) { return a - b; }
exports.subtract = subtract;

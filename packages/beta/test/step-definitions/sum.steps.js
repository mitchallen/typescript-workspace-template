"use strict";
// Author: Mitch Allen
// File: sum.steps.ts
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var src_1 = require("../../src");
function assert(condition, message) {
    if (message === void 0) { message = "Assertion failed"; }
    if (!condition) {
        throw new Error(message);
    }
}
var result;
var a;
var b;
var c;
(0, cucumber_1.Given)('I have three numbers {int}, {int}, {int}', function (n1, n2, n3) {
    a = n1;
    b = n2;
    c = n3;
});
(0, cucumber_1.When)('I sum three numbers', function () {
    result = (0, src_1.sum)(a, b, c);
});
(0, cucumber_1.Then)('I get {int}', function (expectedResult) {
    assert(result == expectedResult);
});

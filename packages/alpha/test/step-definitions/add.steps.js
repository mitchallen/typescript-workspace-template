"use strict";
// Author: Mitch Allen
// File: add.steps.ts
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
(0, cucumber_1.Given)('I have a number {int}', function (number) {
    a = number;
});
(0, cucumber_1.Given)('I have another number {int}', function (number) {
    b = number;
});
(0, cucumber_1.When)('I add them', function () {
    result = (0, src_1.add)(a, b);
});
(0, cucumber_1.Then)('I get {int}', function (expectedResult) {
    assert(result == expectedResult);
});

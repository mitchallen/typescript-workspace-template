"use strict";
// Author: Mitch Allen
// File: log.steps.ts
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var src_1 = require("../../src");
var sinon = require("sinon");
function assert(condition, message) {
    if (message === void 0) { message = "Assertion failed"; }
    if (!condition) {
        throw new Error(message);
    }
}
var logSpy;
(0, cucumber_1.Given)('I have a log function', function () {
    logSpy = sinon.spy(console, 'log');
});
(0, cucumber_1.When)('I call the log function', function () {
    (0, src_1.log)("Something was logged");
});
(0, cucumber_1.Then)('something should be written to the screen', function () {
    assert(logSpy.called, "spy called");
    var logMessageRegex = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z\]\sSomething was logged$/;
    assert(logSpy.calledWithMatch(logMessageRegex), "spy called with");
    // Cleanup after the test
    logSpy.restore();
});

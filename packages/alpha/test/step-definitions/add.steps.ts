// Author: Mitch Allen
// File: add.steps.ts

import { Given, When, Then } from '@cucumber/cucumber';
import { add } from '../../src';

function assert(condition: any, message: string = "Assertion failed"): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

let result: number;
let a: number;
let b: number;

Given('I have a number {int}', function (number: number) {
    a = number;
});

Given('I have another number {int}', function (number: number) {
    b = number;
});

When('I add them', function () {
    result = add(a, b);
});

Then('I get {int}', function (expectedResult: number) {
    assert( result == expectedResult )
});

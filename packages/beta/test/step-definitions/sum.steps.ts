// Author: Mitch Allen
// File: sum.steps.ts

import { Given, When, Then } from '@cucumber/cucumber';
import { sum } from '../../src';

function assert(condition: any, message: string = "Assertion failed"): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

let result: number;
let a: number;
let b: number;
let c: number

Given('I have three numbers {int}, {int}, {int}', (n1: number, n2: number, n3: number) => {
    a = n1
    b = n2
    c = n3
})

When('I sum three numbers', () => {
  result = sum(a, b, c)
})

Then('I get {int}', function (expectedResult: number) {
  assert( result == expectedResult )
});

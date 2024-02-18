// Author: Mitch Allen
// File: log.steps.ts

import { Given, When, Then } from '@cucumber/cucumber';
import { log } from '../../src';

import * as sinon from 'sinon';

function assert(condition: any, message: string = "Assertion failed"): asserts condition {
  if (!condition) {
      throw new Error(message);
  }
}

let logSpy: sinon.SinonSpy;

Given('I have a log function', function () {
  logSpy = sinon.spy(console, 'log');
});

When('I call the log function', function () {
  log("Something was logged");
});

Then('something should be written to the screen', function () {
  assert(logSpy.called, "spy called")
  const logMessageRegex = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z\]\sSomething was logged$/;
  assert(logSpy.calledWithMatch(logMessageRegex), "spy called with")
  // Cleanup after the test
  logSpy.restore();
});
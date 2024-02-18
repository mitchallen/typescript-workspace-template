"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(message) {
    var now = new Date();
    var timestamp = now.toISOString();
    console.log("[".concat(timestamp, "] ").concat(message));
}
exports.log = log;

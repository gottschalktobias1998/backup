"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const isIPv4Address_1 = require("./utils/isIPv4Address");
const testAddresses = [
    '192.168.1.1',
    '255.255.255.255',
    '0.0.0.0',
    '256.256.256.256',
    '192.168.1.1.1',
    'abc.def.ghi.jkl'
];
testAddresses.forEach(address => {
    console.log(`${address} is ${(0, isIPv4Address_1.isIPv4Address)(address) ? 'a VALID' : 'an INVALID'} IPv4 address.`);
});

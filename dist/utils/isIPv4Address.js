"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIPv4Address = void 0;
/**
 * Checks if a given string is a valid IPv4 address.
 * @param address - The address to check.
 * @returns True if the address is a valid IPv4 address, false otherwise.
 */
function isIPv4Address(address) {
    // Regular expression for validating IPv4 addresses
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(address);
}
exports.isIPv4Address = isIPv4Address;

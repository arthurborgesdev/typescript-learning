"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.customArray = void 0;
var _ = require("underscore");
var customArray = /** @class */ (function (_super) {
    __extends(customArray, _super);
    function customArray(args) {
        var _this = _super.apply(this, args) || this;
        _this.add = function (secondArr) {
            this.args = this.args.slice().concat(secondArr);
            return this;
        };
        _this.filter = function (fn) {
            return (this.args.slice()).filter(fn);
        };
        _this.contains = function (value) {
            return _.contains(this.args.slice(), value);
        };
        _this.equal = function (otherArray) {
            return JSON.stringify(this.args) === JSON.stringify(otherArray);
        };
        _this.find = function (element) {
            return _.find(this.args.slice(), element);
        };
        _this.reject = function (iterator) {
            return _.reject(this.args.slice(), iterator);
        };
        _this.every = function (iterator) {
            return _.every(this.args.slice(), iterator);
        };
        _this.where = function (element) {
            return _.where(this.args.slice(), element);
        };
        _this.each = [].forEach;
        _this.args = args;
        return _this;
    }
    return customArray;
}(Array));
exports.customArray = customArray;

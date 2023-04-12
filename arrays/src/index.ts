import _ = require('underscore');

export class customArray extends Array {
  args: any;
  constructor(args: any[]) {
    super(...args);
    this.args = args;
  }

  add = function (secondArr) {
    this.args = this.args.slice().concat(secondArr);
    return this;
  }
  
  filter = function(fn) {
    return (this.args.slice()).filter(fn);
  }
  
  contains = function(value) {
    return _.contains(this.args.slice(), value);
  }
  
  equal = function(otherArray) {
    return JSON.stringify(this.args) === JSON.stringify(otherArray);
  }
  
  find = function(element) {
    return _.find(this.args.slice(), element);
  }
  
  reject = function(iterator) {
    return _.reject(this.args.slice(), iterator);
  }
  
  every = function(iterator) {
    return _.every(this.args.slice(), iterator);
  }
  
  where = function(element) {
    return _.where(this.args.slice(), element);
  }
  
  each = [].forEach;
}

export interface Array {
  args: any[];
  add(secondArr: any[]): any[];
  filter(fn: (element: any) => boolean): any[];
  contains: (value: any) => boolean;
  equal(otherArray: any[]): boolean;
  find(element: any): any;
  reject(iterator: (element: any) => boolean): any[];
  every(iterator: (element: any) => boolean): boolean;
  where(element: any): any[];
  each(iterator: (element: any) => void): void;
}


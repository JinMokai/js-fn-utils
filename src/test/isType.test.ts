import { describe, it, assert } from 'vitest'

import * as isType from '../isType';

describe("is boolean test", () => {
    it("if the params is a false", () => {
        assert.equal(isType.isBoolean(false), true);
    })
    it("if the params is a true", () => {
        assert.equal(isType.isBoolean(true), true);
    })
    it("if the params is a 3", () => {
        assert.equal(isType.isBoolean(3), false);
    })
    it("if the params is a 0", () => {
        assert.equal(isType.isBoolean(0), false);
    })
    it("if the params is a -1", () => {
        assert.equal(isType.isBoolean(-1), false);
    })
    it("if the params is a null", () => {
        assert.equal(isType.isBoolean(null), false);
    })
    it("if the params is a undefined", () => {
        assert.equal(isType.isBoolean(undefined), false);
    })
    it("if the params is a string", () => {
        assert.equal(isType.isBoolean('hello world'), false);
    })
    it("if the params is a symbol", () => {
        let sys = Symbol('hello world');
        assert.equal(isType.isBoolean(sys), false);
    })
})

describe('is number test', () => {
    it("if the params is a 3", () => {
        assert.equal(isType.isNumber(3), true);
    })
    it("if the params is a 0", () => {
        assert.equal(isType.isNumber(0), true);
    })
    it("if the params is a -1", () => {
        assert.equal(isType.isNumber(-1), true);
    })
    it("if the params is a null", () => {
        assert.equal(isType.isNumber(null), false);
    })
    it("if the params is a undefined", () => {
        assert.equal(isType.isNumber(undefined), false);
    })
    it("if the params is a string", () => {
        assert.equal(isType.isNumber("1"), false);
    })
})

describe('is string test', () => {
    it("if the params is a 3", () => {
        assert.equal(isType.isString(3), false);
    })
    it("if the params is a 0", () => {
        assert.equal(isType.isString(0), false);
    })
    it("if the params is a -1", () => {
        assert.equal(isType.isString(-1), false);
    })
})


describe('is undefined test', () => {
    it("if the params is a undefined", () => {
        assert.equal(isType.isUndefined(undefined), true);
    })
    it("if the params is a null", () => {
        assert.equal(isType.isUndefined(null), false);
    })
    it("if the params is a 3", () => {
        assert.equal(isType.isUndefined(3), false);
    })
})

describe('is array test', () => {
    it("if the params is a []", () => {
        assert.equal(isType.isArray([]), true);
    })
    it("if the params is a {} ", () => {
        assert.equal(isType.isArray({}), false);
    })
    it("if the params is a string ", () => {
        assert.equal(isType.isArray('32'), false);
    })
    it("if the params is a number ", () => {
        assert.equal(isType.isArray(32), false);
    })
})

describe('is object test', () => {
    it("if the params is a null", () => {
        assert.equal(isType.isObject(null), false);
    })
    it("if the params is a 3", () => {
        assert.equal(isType.isObject(3), false);
    })
    it("if the params is a undefined", () => {
        assert.equal(isType.isObject(undefined), false);
    })
    it("if the params is a {} ", () => {
        assert.equal(isType.isObject({}), true);
    })
    it("if the params is a []", () => {
        assert.equal(isType.isObject([]), false);
    })
})

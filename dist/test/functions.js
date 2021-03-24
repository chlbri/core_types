"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAsync20Tests = exports.generateAsync19Tests = exports.generateAsync18Tests = exports.generateAsync17Tests = exports.generateAsync16Tests = exports.generateAsync15Tests = exports.generateAsync14Tests = exports.generateAsync13Tests = exports.generateAsync12Tests = exports.generateAsync11Tests = exports.generateAsync10Tests = exports.generateAsync9Tests = exports.generateAsync8Tests = exports.generateAsync7Tests = exports.generateAsync6Tests = exports.generateAsync5Tests = exports.generateAsync4Tests = exports.generateAsync3Tests = exports.generateAsync2Tests = exports.generateAsync1Test = exports.generate20Tests = exports.generate19Tests = exports.generate18Tests = exports.generate17Tests = exports.generate16Tests = exports.generate15Tests = exports.generate14Tests = exports.generate13Tests = exports.generate12Tests = exports.generate11Tests = exports.generate10Tests = exports.generate9Tests = exports.generate8Tests = exports.generate7Tests = exports.generate6Tests = exports.generate5Tests = exports.generate4Tests = exports.generate3Tests = exports.generate2Tests = exports.generate1Test = exports.generateAsyncTests = exports.generateTests = exports.mapperAsyncTest = exports.mapperTest = exports.generateAsyncTestTable = exports.generateTestTable = void 0;
const uuid_1 = require("uuid");
function generateTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [
        actuals[index],
        expecteds[index],
    ]);
    return out;
}
exports.generateTestTable = generateTestTable;
function generateAsyncTestTable(func, actuals, expecteds, omits = []) {
    const out = actuals.map((_, index) => [
        actuals[index],
        expecteds[index],
    ]);
    return out;
}
exports.generateAsyncTestTable = generateAsyncTestTable;
function testNullTest(...actual) {
    const inner = actual == null ||
        actual === [null] ||
        actual === undefined ||
        actual === [undefined] ||
        actual.every((v) => v == null ||
            v === [null] ||
            v === undefined ||
            v === [undefined]);
    return inner;
}
function mapperTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNullTest(...actual)
            ? actual[0]
            : actual.join(", ");
        return it(`${uuid ? `${uuid_1.v4()} ==>  ` : ""}Arguments : [ ${_actualText} ] shoulds return ${expected}`, () => {
            expect(JSON.stringify(spy(...actual))).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
exports.mapperTest = mapperTest;
function mapperAsyncTest(spy, uuid = false, omits = []) {
    return ([actual, expected]) => {
        const _actualText = testNullTest(...actual)
            ? actual[0]
            : actual.join(", ");
        return it(`${uuid ? `${uuid_1.v4()} ==>  ` : ""}Arguments : [ ${_actualText} ] shoulds return ${expected}`, async () => {
            const _processed = await spy(...actual);
            expect(JSON.stringify(_processed)).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
exports.mapperAsyncTest = mapperAsyncTest;
function generateTests(func, actuals, expecteds, uuid = false) {
    const table = generateTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    });
    return { tests, spy };
}
exports.generateTests = generateTests;
function generateAsyncTests(func, actuals, expecteds, uuid = false, omits = []) {
    const table = generateAsyncTestTable(func, actuals, expecteds, omits);
    const spy = jest.fn(func);
    const mapper = mapperAsyncTest(spy, uuid, omits);
    const tests = table.map(mapper);
    const len = expecteds.length;
    it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    });
    return { tests, spy };
}
exports.generateAsyncTests = generateAsyncTests;
// #region Generating ....
// const generateFunction = (val: number) =>
//   `export function generate${val}Test${
//     val == 1 ? "" : "s"
//   }<F extends (...args: any[]) => any>(func: F,actuals: TupleOf<Parameters<F>, ${val}>, expecteds: TupleOf<ReturnType<F>, ${val}>, uuid = false) {return generateTests(func, actuals, expecteds, uuid);}`;
// console.log("====================================");
// Array.from(
//   { length: 20 },
//   (_, i) => generateFunction(i + 1) + EOL
// ).map((vc) => console.log(vc));
// console.log("====================================");
// #endregion
// #region Helper Functions
function generate1Test(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate1Test = generate1Test;
function generate2Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate2Tests = generate2Tests;
function generate3Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate3Tests = generate3Tests;
function generate4Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate4Tests = generate4Tests;
function generate5Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate5Tests = generate5Tests;
function generate6Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate6Tests = generate6Tests;
function generate7Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate7Tests = generate7Tests;
function generate8Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate8Tests = generate8Tests;
function generate9Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate9Tests = generate9Tests;
function generate10Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate10Tests = generate10Tests;
function generate11Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate11Tests = generate11Tests;
function generate12Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate12Tests = generate12Tests;
function generate13Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate13Tests = generate13Tests;
function generate14Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate14Tests = generate14Tests;
function generate15Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate15Tests = generate15Tests;
function generate16Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate16Tests = generate16Tests;
function generate17Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate17Tests = generate17Tests;
function generate18Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate18Tests = generate18Tests;
function generate19Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate19Tests = generate19Tests;
function generate20Tests(func, actuals, expecteds, uuid = false) {
    return generateTests(func, actuals, expecteds, uuid);
}
exports.generate20Tests = generate20Tests;
// #endregion
// #region Helper Functions - Async
function generateAsync1Test(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync1Test = generateAsync1Test;
function generateAsync2Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync2Tests = generateAsync2Tests;
function generateAsync3Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync3Tests = generateAsync3Tests;
function generateAsync4Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync4Tests = generateAsync4Tests;
function generateAsync5Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync5Tests = generateAsync5Tests;
function generateAsync6Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync6Tests = generateAsync6Tests;
function generateAsync7Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync7Tests = generateAsync7Tests;
function generateAsync8Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync8Tests = generateAsync8Tests;
function generateAsync9Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync9Tests = generateAsync9Tests;
function generateAsync10Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync10Tests = generateAsync10Tests;
function generateAsync11Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync11Tests = generateAsync11Tests;
function generateAsync12Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync12Tests = generateAsync12Tests;
function generateAsync13Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync13Tests = generateAsync13Tests;
function generateAsync14Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync14Tests = generateAsync14Tests;
function generateAsync15Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync15Tests = generateAsync15Tests;
function generateAsync16Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync16Tests = generateAsync16Tests;
function generateAsync17Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync17Tests = generateAsync17Tests;
function generateAsync18Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync18Tests = generateAsync18Tests;
function generateAsync19Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync19Tests = generateAsync19Tests;
function generateAsync20Tests(func, actuals, expecteds, uuid = false, omits = []) {
    return generateAsyncTests(func, actuals, expecteds, uuid, omits);
}
exports.generateAsync20Tests = generateAsync20Tests;
// #endregion

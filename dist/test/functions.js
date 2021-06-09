"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAsync20Tests = exports.generateAsync19Tests = exports.generateAsync18Tests = exports.generateAsync17Tests = exports.generateAsync16Tests = exports.generateAsync15Tests = exports.generateAsync14Tests = exports.generateAsync13Tests = exports.generateAsync12Tests = exports.generateAsync11Tests = exports.generateAsync10Tests = exports.generateAsync9Tests = exports.generateAsync8Tests = exports.generateAsync7Tests = exports.generateAsync6Tests = exports.generateAsync5Tests = exports.generateAsync4Tests = exports.generateAsync3Tests = exports.generateAsync2Tests = exports.generateAsync1Test = exports.generate20Tests = exports.generate19Tests = exports.generate18Tests = exports.generate17Tests = exports.generate16Tests = exports.generate15Tests = exports.generate14Tests = exports.generate13Tests = exports.generate12Tests = exports.generate11Tests = exports.generate10Tests = exports.generate9Tests = exports.generate8Tests = exports.generate7Tests = exports.generate6Tests = exports.generate5Tests = exports.generate4Tests = exports.generate3Tests = exports.generate2Tests = exports.generate1Test = exports.generateReturnDataTests = exports.generateAsyncTests = exports.generateTests = exports.mapperReturnDataTest = exports.returnSimpleData = exports.mapperAsyncTest = exports.mapperTest = exports.generateReturnDataTestTable = exports.generateAsyncTestTable = exports.generateTestTable = void 0;
exports.generateReturnData20Tests = exports.generateReturnData19Tests = exports.generateReturnData18Tests = exports.generateReturnData17Tests = exports.generateReturnData16Tests = exports.generateReturnData15Tests = exports.generateReturnData14Tests = exports.generateReturnData13Tests = exports.generateReturnData12Tests = exports.generateReturnData11Tests = exports.generateReturnData10Tests = exports.generateReturnData9Tests = exports.generateReturnData8Tests = exports.generateReturnData7Tests = exports.generateReturnData6Tests = exports.generateReturnData5Tests = exports.generateReturnData4Tests = exports.generateReturnData3Tests = exports.generateReturnData2Tests = exports.generateReturnData1Test = void 0;
const nanoid_1 = require("nanoid");
const functions_1 = require("../functions");
// #region Configurations
function generateTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [actuals[index], expecteds[index]]);
    return out;
}
exports.generateTestTable = generateTestTable;
function generateAsyncTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [actuals[index], expecteds[index]]);
    return out;
}
exports.generateAsyncTestTable = generateAsyncTestTable;
function generateReturnDataTestTable(func, actuals, expecteds) {
    const out = actuals.map((_, index) => [actuals[index], expecteds[index]]);
    return out;
}
exports.generateReturnDataTestTable = generateReturnDataTestTable;
function testNullTest(...actual) {
    const inner = actual == null ||
        actual === [null] ||
        actual === undefined ||
        actual === [undefined] ||
        actual.every((v) => v == null || v === [null] || v === undefined || v === [undefined]);
    return inner;
}
function mapperTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNullTest(...actual)
            ? actual[0]
            : actual.join(", ");
        return it(uuid
            ? `${nanoid_1.nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`, () => {
            expect(JSON.stringify(spy(...actual))).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
exports.mapperTest = mapperTest;
function mapperAsyncTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNullTest(...actual)
            ? actual[0]
            : actual.join(", ");
        return it(uuid
            ? `${nanoid_1.nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`, async () => {
            const _processed = await spy(...actual);
            expect(JSON.stringify(_processed)).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
exports.mapperAsyncTest = mapperAsyncTest;
function returnSimpleData(data) {
    const { _id, ...out } = data;
    return out;
}
exports.returnSimpleData = returnSimpleData;
function mapperReturnDataTest(spy, uuid = false) {
    return ([actual, expected]) => {
        const _actualText = testNullTest(...actual)
            ? actual[0]
            : actual.join(", ");
        return it(uuid
            ? `${nanoid_1.nanoid()} ===>  `
            : `Arguments : [ ${_actualText} ] shoulds return ${expected} ===>`, async () => {
            const { status, payload } = (await spy(...actual));
            let _processed;
            if (!payload) {
                _processed = { status };
            }
            else if (functions_1.isArray(payload)) {
                _processed = {
                    status,
                    payload: payload.map(returnSimpleData),
                };
            }
            else {
                _processed = {
                    status,
                    payload: returnSimpleData(payload),
                };
            }
            expect(JSON.stringify(_processed)).toStrictEqual(JSON.stringify(expected));
            expect(spy).toBeCalledWith(...actual);
        });
    };
}
exports.mapperReturnDataTest = mapperReturnDataTest;
function generateTests(func, actuals, expecteds, uuid = false) {
    const table = generateTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    (() => it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    }))();
    return { tests, spy };
}
exports.generateTests = generateTests;
function generateAsyncTests(func, actuals, expecteds, uuid = false) {
    const table = generateAsyncTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperAsyncTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    (() => it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    }))();
    return { tests, spy };
}
exports.generateAsyncTests = generateAsyncTests;
function generateReturnDataTests(func, actuals, expecteds, uuid = false) {
    const table = generateReturnDataTestTable(func, actuals, expecteds);
    const spy = jest.fn(func);
    const mapper = mapperReturnDataTest(spy, uuid);
    const tests = table.map(mapper);
    const len = expecteds.length;
    (() => it(`${func.name} should be call ${len} times`, () => {
        expect(spy).toBeCalledTimes(len);
    }))();
    return { tests, spy };
}
exports.generateReturnDataTests = generateReturnDataTests;
// #endregion
// #region Helper Functions - Sync
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
function generateAsync1Test(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync1Test = generateAsync1Test;
function generateAsync2Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync2Tests = generateAsync2Tests;
function generateAsync3Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync3Tests = generateAsync3Tests;
function generateAsync4Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync4Tests = generateAsync4Tests;
function generateAsync5Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync5Tests = generateAsync5Tests;
function generateAsync6Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync6Tests = generateAsync6Tests;
function generateAsync7Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync7Tests = generateAsync7Tests;
function generateAsync8Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync8Tests = generateAsync8Tests;
function generateAsync9Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync9Tests = generateAsync9Tests;
function generateAsync10Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync10Tests = generateAsync10Tests;
function generateAsync11Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync11Tests = generateAsync11Tests;
function generateAsync12Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync12Tests = generateAsync12Tests;
function generateAsync13Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync13Tests = generateAsync13Tests;
function generateAsync14Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync14Tests = generateAsync14Tests;
function generateAsync15Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync15Tests = generateAsync15Tests;
function generateAsync16Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync16Tests = generateAsync16Tests;
function generateAsync17Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync17Tests = generateAsync17Tests;
function generateAsync18Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync18Tests = generateAsync18Tests;
function generateAsync19Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync19Tests = generateAsync19Tests;
function generateAsync20Tests(func, actuals, expecteds, uuid = false) {
    return generateAsyncTests(func, actuals, expecteds, uuid);
}
exports.generateAsync20Tests = generateAsync20Tests;
// #endregion
// #region Helper Functions - ReturnData
function generateReturnData1Test(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData1Test = generateReturnData1Test;
function generateReturnData2Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData2Tests = generateReturnData2Tests;
function generateReturnData3Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData3Tests = generateReturnData3Tests;
function generateReturnData4Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData4Tests = generateReturnData4Tests;
function generateReturnData5Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData5Tests = generateReturnData5Tests;
function generateReturnData6Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData6Tests = generateReturnData6Tests;
function generateReturnData7Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData7Tests = generateReturnData7Tests;
function generateReturnData8Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData8Tests = generateReturnData8Tests;
function generateReturnData9Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData9Tests = generateReturnData9Tests;
function generateReturnData10Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData10Tests = generateReturnData10Tests;
function generateReturnData11Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData11Tests = generateReturnData11Tests;
function generateReturnData12Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData12Tests = generateReturnData12Tests;
function generateReturnData13Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData13Tests = generateReturnData13Tests;
function generateReturnData14Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData14Tests = generateReturnData14Tests;
function generateReturnData15Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData15Tests = generateReturnData15Tests;
function generateReturnData16Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData16Tests = generateReturnData16Tests;
function generateReturnData17Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData17Tests = generateReturnData17Tests;
function generateReturnData18Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData18Tests = generateReturnData18Tests;
function generateReturnData19Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData19Tests = generateReturnData19Tests;
function generateReturnData20Tests(func, actuals, expecteds, uuid = false) {
    return generateReturnDataTests(func, actuals, expecteds, uuid);
}
exports.generateReturnData20Tests = generateReturnData20Tests;
// #endregion
// #region Generating ....
// const generateFunction = (val: number) =>
//   `export function generateReturnData${val}Test${
//     val == 1 ? "" : "s"
//   }<F extends (...args: any[]) =>  | PromiseReturnData<WithId<any>>
//   | PromiseReturnData<WithId<any>[]>>(func: F,actuals: TupleOf<Parameters<F>, ${val}>, expecteds:TupleOf<
//     DataFromPromiseWithoutId<ReturnType<F>>,
//     ${val}
//   >, uuid = false) {return generateReturnDataTests(func, actuals, expecteds, uuid);}`;
// console.log("====================================");
// Array.from(
//   { length: 20 },
//   (_, i) => generateFunction(i + 1) + EOL
// ).map((vc) => console.log(vc));
// console.log("====================================");
// #endregion

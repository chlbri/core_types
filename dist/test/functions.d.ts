/// <reference types="jest" />
import { DataFromPromise, PromiseReturnData } from "../interfaces";
import { LengthOf, ThenArg, TupleOf } from "../types";
import { TestElement } from "./types";
export declare function generateTestTable<F extends (...args: any[]) => any, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<ReturnType<F>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2): TupleOf<TestElement<T1[number], T2[number]>, LengthOf<T1>>;
export declare function generateAsyncTestTable<F extends (...args: any[]) => PromiseReturnData, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<DataFromPromise<ReturnType<F>>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2, omits?: ReadonlyArray<keyof T2[number]>): TupleOf<TestElement<T1[number], { [P in Exclude<keyof (ReturnType<F> extends PromiseReturnData<infer U> ? U : ReturnType<F> extends PromiseLike<any> ? ThenArg<PromiseLike<any> & ReturnType<F>> : ReturnType<F>), keyof T2[number]>]: (ReturnType<F> extends PromiseReturnData<infer U> ? U : ReturnType<F> extends PromiseLike<any> ? ThenArg<PromiseLike<any> & ReturnType<F>> : ReturnType<F>)[P]; }>, LengthOf<T1>>;
export declare function mapperTest<P extends any[], R extends any>(spy: jest.Mock<R, P>, uuid?: boolean): ([actual, expected]: TestElement<P, R>) => void;
export declare function mapperAsyncTest<P extends any[], R extends PromiseReturnData>(spy: jest.Mock<R, P>, uuid?: boolean, omits?: ReadonlyArray<keyof DataFromPromise<R>>): ([actual, expected]: TestElement<P, { [P_1 in Exclude<keyof DataFromPromise<R>, keyof DataFromPromise<R>>]: DataFromPromise<R>[P_1]; }>) => void;
export declare function generateTests<F extends (...args: any[]) => any, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<ReturnType<F>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generateAsyncTests<F extends (...args: any[]) => PromiseReturnData, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<DataFromPromise<ReturnType<F>>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2, uuid?: boolean, omits?: ReadonlyArray<keyof T2[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generate1Test<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 1>, expecteds: TupleOf<ReturnType<F>, 1>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate2Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 2>, expecteds: TupleOf<ReturnType<F>, 2>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate3Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 3>, expecteds: TupleOf<ReturnType<F>, 3>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate4Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 4>, expecteds: TupleOf<ReturnType<F>, 4>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate5Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 5>, expecteds: TupleOf<ReturnType<F>, 5>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate6Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 6>, expecteds: TupleOf<ReturnType<F>, 6>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate7Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 7>, expecteds: TupleOf<ReturnType<F>, 7>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate8Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 8>, expecteds: TupleOf<ReturnType<F>, 8>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate9Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 9>, expecteds: TupleOf<ReturnType<F>, 9>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate10Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 10>, expecteds: TupleOf<ReturnType<F>, 10>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate11Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 11>, expecteds: TupleOf<ReturnType<F>, 11>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate12Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 12>, expecteds: TupleOf<ReturnType<F>, 12>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate13Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 13>, expecteds: TupleOf<ReturnType<F>, 13>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate14Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 14>, expecteds: TupleOf<ReturnType<F>, 14>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate15Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 15>, expecteds: TupleOf<ReturnType<F>, 15>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate16Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 16>, expecteds: TupleOf<ReturnType<F>, 16>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate17Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 17>, expecteds: TupleOf<ReturnType<F>, 17>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate18Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 18>, expecteds: TupleOf<ReturnType<F>, 18>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate19Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 19>, expecteds: TupleOf<ReturnType<F>, 19>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generate20Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 20>, expecteds: TupleOf<ReturnType<F>, 20>, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
};
export declare function generateAsync1Test<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 1>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 1>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync2Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 2>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 2>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync3Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 3>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 3>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync4Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 4>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 4>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync5Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 5>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 5>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync6Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 6>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 6>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync7Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 7>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 7>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync8Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 8>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 8>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync9Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 9>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 9>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync10Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 10>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 10>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync11Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 11>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 11>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync12Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 12>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 12>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync13Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 13>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 13>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync14Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 14>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 14>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync15Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 15>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 15>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync16Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 16>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 16>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync17Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 17>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 17>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync18Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 18>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 18>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync19Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 19>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 19>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};
export declare function generateAsync20Tests<F extends (...args: any[]) => any>(func: F, actuals: TupleOf<Parameters<F>, 20>, expecteds: TupleOf<DataFromPromise<ReturnType<F>>, 20>, uuid?: boolean, omits?: ReadonlyArray<keyof typeof expecteds[number]>): {
    readonly tests: void[];
    readonly spy: jest.Mock<PromiseReturnData<any>, any[]>;
};

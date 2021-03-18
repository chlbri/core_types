/// <reference types="jest" />
import { LengthOf, TupleOf } from "../types";
import { TestElement } from "./types";
export declare function generateTestTable<F extends (...args: any[]) => any, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<ReturnType<F>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2): TupleOf<TestElement<F extends (...args: infer P) => any ? P : never, F extends (...args: any) => infer R ? R : any>, LengthOf<T1>>;
export declare function mapperTest<P extends any[], R extends any>(spy: jest.Mock<R, P>, uuid?: boolean): ([actual, expected]: TestElement<P, R>) => void;
export declare function generateTests<F extends (...args: any[]) => any, T1 extends TupleOf<Parameters<F>>, T2 extends TupleOf<ReturnType<F>, LengthOf<T1>>>(func: F, actuals: T1, expecteds: T2, uuid?: boolean): {
    readonly tests: void[];
    readonly spy: jest.Mock<any, any[]>;
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

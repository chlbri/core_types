import { TupleOf } from '../types';
export declare type TestElement<T1 = any, T2 = any> = [T1, T2];
export declare type TestTable<T1 = any, T2 = any, N extends number = number> = TupleOf<TestElement<T1, T2>, N>;

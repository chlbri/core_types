declare type NFunction<I extends unknown[] = unknown[], O extends any = any> = (...arg: I) => O;
export default NFunction;

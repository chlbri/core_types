export interface IUseCase<
  N extends string = string,
  F extends (...args: any[]) => any = any,
> {
  call: F;
  __name: N;
}

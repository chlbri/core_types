export default interface IUseCase {
  call: (...args: any[]) => any;
  __name: string;
}

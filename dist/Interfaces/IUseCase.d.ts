export interface IUseCase {
    call: (...args: any[]) => any;
    __name: string;
}

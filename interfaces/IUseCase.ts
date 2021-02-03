import ActivityDomain from "./ActivityDomain";

export default interface I {
  call: (...args: any[]) => any;
  __name: string;
}

export function useCaseFromDomain<D extends ActivityDomain, K extends keyof D>(
  domain: D,
  useCase: K
): D[K]["call"] {
  return domain[useCase].call;
}

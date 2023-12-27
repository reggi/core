/** will reject function execution if the arguments don't match type guard */
export function argumentGuard<G extends any[], T>(
  fn: (...args: G) => T,
  ...checks: { [K in keyof G]: (arg: any) => arg is G[K] }
): (...args: G) => T | undefined {
  return (...args: G): T | undefined => {
    if (args.length === checks.length && args.every((arg, index) => checks[index](arg))) {
      return fn(...args);
    }
    return undefined;
  }
}

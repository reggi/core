/** tagged template literal that will return undefined if any of the variables are not valid strings */
export function conditional (strings: TemplateStringsArray, ...values: unknown[]): string | undefined {
  const valid = values.every((v) => typeof v === 'string' && v)
  if (!valid) return undefined
  return strings.reduce((result, str, i) => result + (values[i - 1] ?? '') + str);
}
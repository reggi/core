export function isDefined <T> (v: T | undefined): v is T {
  return v !== undefined
}

export function isUndefined (v: unknown | undefined): v is undefined {
  return v === undefined
}

export function isString (v: string | undefined): v is string {
  return typeof v === 'string'
}

export function isNumber (v: number | undefined): v is number {
  return typeof v === 'number'
}

export function isBoolean (v: boolean | undefined): v is boolean {
  return typeof v === 'boolean'
}
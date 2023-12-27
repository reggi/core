import { assertEquals } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { argumentGuard  } from "../src/argument_guard.ts";
import { isNumber } from "../src/guards.ts";
import { assertType, IsExact } from "https://deno.land/std@0.179.0/testing/types.ts";

Deno.test('argumentGuard -> "add"', () => {
  const add = argumentGuard((a, b) => a + b, isNumber, isNumber)
  assertEquals(add(1, 2), 3)
  assertType<IsExact<typeof add, (a: number, b: number) => number | undefined>>(true);
})

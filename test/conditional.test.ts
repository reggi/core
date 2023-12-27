import { assertEquals } from "https://deno.land/std@0.210.0/assert/mod.ts";
import { conditional  } from "../src/conditional.ts";

Deno.test('conditional -> "greeting" (happy path)', () => {
  const name = 'Sabrina'
  const greeting = conditional`Hello ${name}`  
  assertEquals(greeting, 'Hello Sabrina')
})

Deno.test('conditional -> "greeting" (undefined)', () => {
  const name = undefined
  const greeting = conditional`Hello ${name}`  
  assertEquals(greeting, undefined)
})

Deno.test('conditional -> "greeting" (empty string)', () => {
  const name = ""
  const greeting = conditional`Hello ${name}`  
  assertEquals(greeting, undefined)
})

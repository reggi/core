import { assertEquals } from "https://deno.land/std@0.210.0/assert/assert_equals.ts";
import { safeURL  } from "../src/safe_url.ts";

Deno.test('safeURL (invalid case)', () => {
  const x = safeURL('')
  assertEquals(x.host, undefined)
  assertEquals(x.hostname, undefined)
  assertEquals(x.protocol, undefined)
  assertEquals(x.pathname, undefined)
})

Deno.test('safeURL (valid case)', () => {
  const x = safeURL('http://example.com/cats')
  assertEquals(x.host, 'example.com')
  assertEquals(x.hostname, 'example.com')
  assertEquals(x.protocol, 'http:')
  assertEquals(x.pathname, '/cats')
})
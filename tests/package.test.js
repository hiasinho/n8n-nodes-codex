import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));

test('package name is defined', () => {
  assert.ok(pkg.name && pkg.name.length > 0);
});

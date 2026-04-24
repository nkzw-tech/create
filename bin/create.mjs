#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const result = spawnSync('vp', ['create', '@nkzw', ...process.argv.slice(2)], {
  stdio: 'inherit',
});

if (result.error) {
  console.error('Could not run `vp create @nkzw`.');
  console.error('Install Vite+ first: https://viteplus.dev/guide/');
  process.exit(1);
}

process.exit(result.status ?? 0);

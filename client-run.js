#!/usr/bin/env node

// This script launches the Vite dev server for client-only mode
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = resolve(__dirname, 'client');

console.log('Starting client-only development server...');
console.log(`Client directory: ${clientDir}`);

// Start the Vite dev server with proper host and port settings
const viteProcess = spawn('npx', ['vite', '--port', '5000', '--host', '0.0.0.0'], {
  cwd: clientDir,
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down Vite server...');
  viteProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Shutting down Vite server...');
  viteProcess.kill();
  process.exit(0);
});
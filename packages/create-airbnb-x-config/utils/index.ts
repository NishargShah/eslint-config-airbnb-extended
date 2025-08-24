import path from 'node:path';

import pc from 'picocolors';

import type { InitialReturnValue } from 'prompts';

// Root Path

export const rootPath = path.resolve('.');

// Package Root Path
// This function should return the top-level root directory, not the dist folder, because the root directory is where node_modules is located in order to access the templates.

export const packageRootPath = (() => {
  const pkgRootPath = path.resolve(__dirname, '..');
  const buildFolderName = 'dist';

  return pkgRootPath.endsWith('dist')
    ? pkgRootPath.slice(0, (buildFolderName.length + 1) * -1)
    : pkgRootPath;
})();

// Handle Sigterm

export const handleSigTerm = (): void => process.exit(0);

// onPromptState function

interface PromptStateProps {
  value: InitialReturnValue;
  aborted: boolean;
  exited: boolean;
}

type PromptState = (state: PromptStateProps) => void;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts#L26C1-L38C2
 */
export const onPromptState: PromptState = (state) => {
  if (state.aborted) {
    // If we don't re-enable the terminal cursor before exiting
    // the program, the cursor will remain hidden
    process.stdout.write('\u001B[?25h');
    process.stdout.write('\n');
    process.exit(1);
  }
};

/**
 * User inputs Ctrl+C or Ctrl+D to exit the prompt. We should close the
 * process and not write to the file system.
 */
export const onCancel = (): void => {
  console.error('👋 Exiting, bye bye.');
  process.exit(1);
};

// Run Function Then block

export const success = (): void => {
  // noop
};

// Run Function Catch Block

type Exit = (error: Error) => void;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts#L499
 */
export const exit: Exit = (error) => {
  console.log('Aborting installation.');
  if (error.cause === 'package-failed') {
    console.log(`${pc.red(error.message)} has failed.`);
  } else {
    console.log(`${pc.red('Unexpected error. Please report it as a bug:')}\n`, error);
  }
  process.exit(1);
};

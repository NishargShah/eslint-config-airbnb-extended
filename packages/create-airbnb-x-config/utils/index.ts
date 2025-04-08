import { red } from 'picocolors';

import type { InitialReturnValue } from 'prompts';

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

interface ExitReason {
  command?: string;
}

type Exit = (reason: ExitReason) => void;

/**
 * @see https://github.com/vercel/next.js/blob/canary/packages/create-next-app/index.ts#L499
 */
export const exit: Exit = (reason) => {
  console.log('Aborting installation.');
  if (reason.command) {
    console.log(`${red(reason.command)} has failed.`);
  } else {
    console.log(`${red('Unexpected error. Please report it as a bug:')}\n`, reason);
  }
  process.exit(1);
};

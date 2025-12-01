import type { ArgsOutput } from '@/helpers/@types/getArgs.types';

export type GetCommandsParams = Omit<ArgsOutput, 'createEslintFile' | 'skipInstall'>;

export type GetCommands = (args: GetCommandsParams) => string[];

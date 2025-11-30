import { ProgramOpts } from '@/helpers/@types/program.types';

export type GetCommandsParams = Omit<ProgramOpts, 'createEslintFile' | 'skipInstall'>;

export type GetCommands = (args: GetCommandsParams) => string[];

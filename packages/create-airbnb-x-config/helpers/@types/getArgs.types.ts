import { ProgramOpts } from '@/helpers/@types/program.types';

// Get Config

export type GetConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['config'];

// Get Language

export type GetLanguage = (opts: Partial<ProgramOpts>) => GetArgsOutput['language'];

// Get Formatter

export type GetFormatter = (opts: Partial<ProgramOpts>) => GetArgsOutput['formatter'];

// Get Runtime

export type GetRuntime = (opts: Partial<ProgramOpts>) => GetArgsOutput['runtime'];

// Get Strict Config

export type GetStrictConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['strictConfig'];

// Get Legacy Config

export type GetLegacyConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['legacyConfig'];

// Get Package Manger

export type GetPackageManagerFromOpts = (
  opts: Partial<ProgramOpts>,
) => Promise<GetArgsOutput['packageManager']>;

// Get Args

type GetArgsOutput = {
  [K in keyof ProgramOpts]: K extends 'packageManager' ? ProgramOpts[K] : ProgramOpts[K] | null;
};

export type GetArgs = () => Promise<GetArgsOutput>;

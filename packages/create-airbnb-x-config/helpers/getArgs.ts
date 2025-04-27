import { configs, languages, packageManagers } from '@/constants';
import { getPackageManager } from '@/helpers/getPackageManager';
import program from '@/helpers/program';

import type { ValueOf } from '@/utils/types';

// Get Typescript Value

type GetTypescript = (opts: Partial<ProgramOpts>) => GetArgsOutput['typescript'];

const getTypescript: GetTypescript = (opts) => {
  const { typescript, javascript } = opts;

  if (typescript) return true;
  if (javascript) return false;
  return null;
};

// Get Language

type GetLanguage = (opts: Partial<ProgramOpts>) => GetArgsOutput['language'];

const getLanguage: GetLanguage = (opts) => {
  const { react, reactRouter, next, node } = opts;

  if (react || reactRouter) return languages.REACT;
  if (next) return languages.NEXT;
  if (node) return languages.NODE;
  return null;
};

// Get Config

export const configHelp = `
/**
 * Configuration Rules:
 * 1. Either Base or Node config should be included (choose one).
 * 2. React config can be used with either Next or Remix/React Router (choose one).
 * 3. Including all configs together is not recommended and may lead to conflicts.
 *
 * Summary:
 * - One from: Base | Node
 * - One from: React + (Next | Remix/React Router)
 * - Avoid selecting all configs at once.
 */`;

type GetConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['config'];

export const getConfig: GetConfig = (opts) => {
  const { baseConfig, nodeConfig, reactConfig, nextConfig, reactRouterConfig } = opts;

  const config = [] as NonNullable<GetArgsOutput['config']>;

  if (baseConfig || nodeConfig) {
    if (baseConfig) config.push(configs.BASE);
    if (nodeConfig) config.push(configs.NODE);
    return config;
  }

  if (reactConfig || nextConfig || reactRouterConfig) {
    if (reactConfig) config.push(configs.REACT);

    if (nextConfig) config.push(configs.NEXT);
    else if (reactRouterConfig) config.push(configs.REACT_ROUTER);

    return config;
  }

  return null;
};

// Get Package Manger from Opts

type GetPackageManagerFromOpts = (opts: Partial<ProgramOpts>) => GetArgsOutput['packageManager'];

const getPackageManagerFromOpts: GetPackageManagerFromOpts = (opts) => {
  const { useNpm, useYarn, usePnpm, useBun } = opts;

  if (useNpm) return packageManagers.NPM;
  if (useYarn) return packageManagers.YARN;
  if (usePnpm) return packageManagers.PNPM;
  if (useBun) return packageManagers.BUN;
  return null;
};

// Get Skip Install

type GetSkipInstall = (opts: Partial<ProgramOpts>) => GetArgsOutput['skipInstall'];

const getSkipInstall: GetSkipInstall = (opts) => {
  const { skipInstall } = opts;

  if (skipInstall) return true;
  return null;
};

// Get Args

export interface ProgramOpts {
  typescript: true;
  javascript: true;
  prettier: true;
  react: true;
  reactRouter: true;
  next: true;
  node: true;
  baseConfig: true;
  nodeConfig: true;
  reactConfig: true;
  nextConfig: true;
  reactRouterConfig: true;
  useNpm: true;
  useYarn: true;
  usePnpm: true;
  useBun: true;
  skipInstall: true;
}

export interface GetArgsOutput {
  typescript: boolean | null;
  prettier: boolean | null;
  language: ValueOf<typeof languages> | null;
  config: ValueOf<typeof configs>[] | null;
  packageManager: ValueOf<typeof packageManagers> | null;
  skipInstall: true | null;
}

type GetArgs = () => Promise<GetArgsOutput>;

const getArgs: GetArgs = async () => {
  const opts: Partial<ProgramOpts> = program.opts();
  const config = getConfig(opts);

  return {
    typescript: getTypescript(opts),
    prettier: opts.prettier ? true : null,
    language: config ? languages.OTHER : getLanguage(opts),
    config,
    packageManager: getPackageManagerFromOpts(opts) ?? (await getPackageManager()),
    skipInstall: getSkipInstall(opts),
  };
};

export default getArgs;

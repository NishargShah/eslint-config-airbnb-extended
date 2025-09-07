import { configTypes, languages, packageManagers, strictConfigs } from '@/constants';
import { getPackageManager } from '@/helpers/getPackageManager';
import program from '@/helpers/program';

import type { ValueOf } from '@/utils/types';

// Get Config Type

type GetConfigType = (opts: Partial<ProgramOpts>) => GetArgsOutput['configType'];

const getConfigType: GetConfigType = (opts) => {
  const { extended, legacy } = opts;

  if (extended) return configTypes.EXTENDED;
  if (legacy) return configTypes.LEGACY;
  return null;
};

// Get Typescript Value

type GetTypescript = (opts: Partial<ProgramOpts>) => GetArgsOutput['typescript'];

const getTypescript: GetTypescript = (opts) => {
  const { typescript, javascript } = opts;

  if (typescript) return true;
  if (javascript) return false;
  return null;
};

// Get Strict Config

type GetStrictConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['strictConfig'];

const getStrictConfig: GetStrictConfig = (opts) => {
  const { strictImportConfig, strictReactConfig, strictTypescriptConfig } = opts;

  const strictConfig = [] as NonNullable<ReturnType<GetStrictConfig>>;

  if (strictImportConfig) strictConfig.push(strictConfigs.IMPORT);
  if (strictReactConfig) strictConfig.push(strictConfigs.REACT);
  if (strictTypescriptConfig) strictConfig.push(strictConfigs.TYPESCRIPT);

  return strictConfig.length > 0 ? strictConfig : null;
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

// Get Legacy Config

type GetLegacyConfig = (opts: Partial<ProgramOpts>) => NonNullable<GetArgsOutput['legacyConfig']>;

const getLegacyConfig: GetLegacyConfig = (opts) => {
  const { legacyBaseConfig, legacyReactConfig, legacyReactHooksConfig } = opts;

  return {
    base: legacyBaseConfig ?? (legacyReactConfig ? false : null),
    react: legacyReactConfig ?? (legacyBaseConfig ? false : null),
    reactHooks: legacyReactHooksConfig ?? null,
  } satisfies GetArgsLegacyConfig;
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

// Get to Create ESLint File

type GetCreateESLintFile = (opts: Partial<ProgramOpts>) => GetArgsOutput['createESLintFile'];

const getCreateESLintFile: GetCreateESLintFile = (opts) => {
  const { createEslintFile } = opts;

  if (createEslintFile) return true;
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
  extended: true;
  legacy: true;
  typescript: true;
  javascript: true;
  prettier: true;
  react: true;
  reactRouter: true;
  next: true;
  node: true;
  strictImportConfig: true;
  strictReactConfig: true;
  strictTypescriptConfig: true;
  legacyBaseConfig: true;
  legacyReactConfig: true;
  legacyReactHooksConfig: true;
  useNpm: true;
  useYarn: true;
  usePnpm: true;
  useBun: true;
  createEslintFile: true;
  skipInstall: true;
}

interface GetArgsLegacyConfig {
  base?: boolean | null;
  react?: boolean | null;
  reactHooks?: boolean | null;
}

export interface GetArgsOutput {
  configType: ValueOf<typeof configTypes> | null;
  typescript: boolean | null;
  prettier: boolean | null;
  strictConfig: ValueOf<typeof strictConfigs>[] | null;
  language: ValueOf<typeof languages> | null;
  legacyConfig: GetArgsLegacyConfig | null;
  packageManager: ValueOf<typeof packageManagers> | null;
  createESLintFile: true | null;
  skipInstall: true | null;
}

type GetArgs = () => Promise<GetArgsOutput>;

const getArgs: GetArgs = async () => {
  const opts: Partial<ProgramOpts> = program.opts();

  return {
    configType: getConfigType(opts),
    typescript: getTypescript(opts),
    prettier: opts.prettier ? true : null,
    strictConfig: getStrictConfig(opts),
    language: getLanguage(opts),
    legacyConfig: getLegacyConfig(opts),
    packageManager: getPackageManagerFromOpts(opts) ?? (await getPackageManager()),
    createESLintFile: getCreateESLintFile(opts),
    skipInstall: getSkipInstall(opts),
  };
};

export default getArgs;

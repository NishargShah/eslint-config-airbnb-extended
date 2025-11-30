import {
  configs,
  runtimes,
  packageManagers,
  strictConfigs,
  languages,
  formatters,
} from '@/constants';
import { getPackageManager } from '@/helpers/getPackageManager';
import program from '@/helpers/program';

import type { ValueOf } from '@/types';

// Get Config

type GetConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['config'];

const getConfig: GetConfig = (opts) => {
  const { config } = opts;

  if (config === configs.EXTENDED) return configs.EXTENDED;
  if (config === configs.LEGACY) return configs.LEGACY;
  return null;
};

// Get Language

type GetLanguage = (opts: Partial<ProgramOpts>) => GetArgsOutput['language'];

const getLanguage: GetLanguage = (opts) => {
  const { language } = opts;

  if (language === languages.JAVASCRIPT) return languages.JAVASCRIPT;
  if (language === languages.TYPESCRIPT) return languages.TYPESCRIPT;
  return null;
};

// Get Formatter

type GetFormatter = (opts: Partial<ProgramOpts>) => GetArgsOutput['formatter'];

const getFormatter: GetFormatter = (opts) => {
  const { formatter } = opts;

  if (formatter === formatters.PRETTIER) return formatters.PRETTIER;
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

// Get Runtime

type GetRuntime = (opts: Partial<ProgramOpts>) => GetArgsOutput['runtime'];

const getRuntime: GetRuntime = (opts) => {
  const { react, reactRouter, next, node } = opts;

  if (react || reactRouter) return runtimes.REACT;
  if (next) return runtimes.NEXT;
  if (node) return runtimes.NODE;
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

// Get Args

export interface ProgramOpts {
  config: ValueOf<typeof configs>;
  language: ValueOf<typeof languages>;
  formatter: ValueOf<typeof formatters>;
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
  config: ProgramOpts['config'] | null;
  language: ProgramOpts['language'] | null;
  formatter: ProgramOpts['formatter'] | null;
  strictConfig: ValueOf<typeof strictConfigs>[] | null;
  runtime: ValueOf<typeof runtimes> | null;
  legacyConfig: GetArgsLegacyConfig | null;
  packageManager: ValueOf<typeof packageManagers> | null;
  createESLintFile: true | null;
  skipInstall: true | null;
}

type GetArgs = () => Promise<GetArgsOutput>;

const getArgs: GetArgs = async () => {
  const opts: Partial<ProgramOpts> = program.opts();
  console.log(opts);

  return {
    config: getConfig(opts),
    language: getLanguage(opts),
    formatter: getFormatter(opts),
    strictConfig: getStrictConfig(opts),
    runtime: getRuntime(opts),
    legacyConfig: getLegacyConfig(opts),
    packageManager: getPackageManagerFromOpts(opts) ?? (await getPackageManager()),
    createESLintFile: opts.createEslintFile ? true : null,
    skipInstall: opts.skipInstall ? true : null,
  };
};

export default getArgs;

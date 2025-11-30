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

// Get Runtime

type GetRuntime = (opts: Partial<ProgramOpts>) => GetArgsOutput['runtime'];

const getRuntime: GetRuntime = (opts) => {
  const { runtime } = opts;

  if (
    runtime &&
    ([runtimes.REACT, runtimes.REACT_ROUTER, runtimes.REMIX] as string[]).includes(runtime)
  ) {
    return runtimes.REACT;
  }

  if (runtime === runtimes.NEXT) return runtimes.NEXT;
  if (runtime === runtimes.NODE) return runtimes.NODE;
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
  const { packageManager } = opts;

  if (packageManager === packageManagers.NPM) return packageManagers.NPM;
  if (packageManager === packageManagers.YARN) return packageManagers.YARN;
  if (packageManager === packageManagers.PNPM) return packageManagers.PNPM;
  if (packageManager === packageManagers.BUN) return packageManagers.BUN;
  return null;
};

// Get Args

export interface ProgramOpts {
  config: ValueOf<typeof configs>;
  language: ValueOf<typeof languages>;
  formatter: ValueOf<typeof formatters>;
  runtime: Exclude<ValueOf<typeof runtimes>, typeof runtimes.REACT_ROUTER | typeof runtimes.REMIX>;
  strictImportConfig: true;
  strictReactConfig: true;
  strictTypescriptConfig: true;
  legacyBaseConfig: true;
  legacyReactConfig: true;
  legacyReactHooksConfig: true;
  packageManager: ValueOf<typeof packageManagers>;
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
  runtime: ProgramOpts['runtime'] | null;
  strictConfig: ValueOf<typeof strictConfigs>[] | null;
  legacyConfig: GetArgsLegacyConfig | null;
  packageManager: ProgramOpts['packageManager'] | null;
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
    runtime: getRuntime(opts),
    strictConfig: getStrictConfig(opts),
    legacyConfig: getLegacyConfig(opts),
    packageManager: getPackageManagerFromOpts(opts) ?? (await getPackageManager()),
    createESLintFile: opts.createEslintFile ? true : null,
    skipInstall: opts.skipInstall ? true : null,
  };
};

export default getArgs;

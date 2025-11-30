import {
  configs,
  runtimes,
  packageManagers,
  languages,
  formatters,
  legacyConfigs,
} from '@/constants';
import type {
  ConfigType,
  FormatterType,
  LanguageType,
  LegacyConfigType,
  PackageManagerType,
  RuntimeType,
  StrictConfigType,
} from '@/constants/@types/index.type';
import { getPackageManager } from '@/helpers/getPackageManager';
import program from '@/helpers/program';

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
  const { strictConfig } = opts;

  return strictConfig?.length ? strictConfig : null;
};

// Get Legacy Config

type GetLegacyConfig = (opts: Partial<ProgramOpts>) => GetArgsOutput['legacyConfig'];

const getLegacyConfig: GetLegacyConfig = (opts) => {
  const { legacyConfig } = opts;

  if (legacyConfig === legacyConfigs.BASE) return legacyConfigs.BASE;
  if (legacyConfig === legacyConfigs.REACT) return legacyConfigs.REACT;
  if (legacyConfig === legacyConfigs.REACT_HOOKS) return legacyConfigs.REACT_HOOKS;
  return null;
};

// Get Package Manger from Opts

type GetPackageManagerFromOpts = (
  opts: Partial<ProgramOpts>,
) => Promise<GetArgsOutput['packageManager']>;

const getPackageManagerFromOpts: GetPackageManagerFromOpts = async (opts) => {
  const { packageManager } = opts;

  if (packageManager === packageManagers.NPM) return packageManagers.NPM;
  if (packageManager === packageManagers.YARN) return packageManagers.YARN;
  if (packageManager === packageManagers.PNPM) return packageManagers.PNPM;
  if (packageManager === packageManagers.BUN) return packageManagers.BUN;
  return await getPackageManager();
};

// Get Args

export interface ProgramOpts {
  config: ConfigType;
  language: LanguageType;
  formatter: FormatterType;
  runtime: Exclude<RuntimeType, typeof runtimes.REACT_ROUTER | typeof runtimes.REMIX>;
  strictConfig: StrictConfigType;
  legacyConfig: LegacyConfigType;
  packageManager: PackageManagerType;
  createEslintFile: true;
  skipInstall: true;
}

export type GetArgsOutput = {
  [K in keyof ProgramOpts]: K extends 'packageManager' ? ProgramOpts[K] : ProgramOpts[K] | null;
};

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
    packageManager: await getPackageManagerFromOpts(opts),
    createEslintFile: opts.createEslintFile ? true : null,
    skipInstall: opts.skipInstall ? true : null,
  };
};

export default getArgs;

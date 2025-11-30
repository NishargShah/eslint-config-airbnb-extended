import pc from 'picocolors';

import {
  baseGithubUrl,
  configs,
  eslintConfigName,
  formatters,
  languages,
  legacyLanguages,
  subFolders,
} from '@/constants';

import type { NonNullableArgsOutput } from '@/types';

interface GetConfigUrlOutput {
  path: string;
  url: string;
}

export type GetConfigUrl = (
  args: Pick<
    NonNullableArgsOutput,
    'config' | 'language' | 'formatter' | 'strictConfig' | 'runtime' | 'legacyConfig'
  >,
) => GetConfigUrlOutput | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { config, language, formatter, strictConfig, runtime, legacyConfig } = args;
  const isLegacy = config === configs.LEGACY;

  const prettierText = formatter === formatters.PRETTIER ? 'prettier' : null;
  const tsOrJsText = language === languages.TYPESCRIPT ? 'ts' : 'js';
  const legacyLanguage = (() => {
    if (config === configs.EXTENDED) return null;

    if (legacyConfig.base) return legacyLanguages.BASE;
    // NOTE: React Hooks should come first in the condition, because if someone selects "Yes", it must appear in the config otherwise, it won’t be reached.
    if (legacyConfig.reactHooks) return legacyLanguages.REACT_HOOKS;
    if (legacyConfig.react) return legacyLanguages.REACT;
    return null;
  })();

  const strictOrDefaultText = (() => {
    if (!strictConfig || strictConfig.length === 0) return [subFolders.DEFAULT];

    const strictFolder = [...strictConfig].sort((a, b) => a.localeCompare(b)).join('-');
    return [subFolders.STRICT, strictFolder];
  })();

  const path = [
    ...(isLegacy ? [configs.LEGACY, legacyLanguage] : [runtime]),
    prettierText,
    tsOrJsText,
    ...strictOrDefaultText,
    eslintConfigName,
  ]
    .filter(Boolean)
    .join('/');

  return {
    path,
    url: pc.blue(`${baseGithubUrl}/${path}`),
  };
};

export default getConfigUrl;

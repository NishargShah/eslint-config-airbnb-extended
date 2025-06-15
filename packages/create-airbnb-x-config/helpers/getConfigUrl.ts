import pc from 'picocolors';

import { configTypes, languages, legacyLanguages } from '@/constants';

import type { NonNullableArgsOutput } from '@/utils/types';

export const eslintConfigName = 'eslint.config.mjs';
export const baseGithubUrl =
  'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config/templates';

interface GetConfigUrlOutput {
  path: string;
  url: string;
}

export type GetConfigUrl = (
  args: Pick<
    NonNullableArgsOutput,
    'configType' | 'typescript' | 'prettier' | 'language' | 'legacyConfig'
  >,
) => GetConfigUrlOutput | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { configType, typescript, prettier, language, legacyConfig } = args;
  const isLegacy = configType === configTypes.LEGACY;

  if (!isLegacy && language === languages.OTHER) return null;

  const prettierText = prettier ? 'prettier' : null;
  const tsOrJsText = typescript ? 'ts' : 'js';
  const legacyLanguage = (() => {
    if (configType === configTypes.EXTENDED) return null;

    if (legacyConfig.base) return legacyLanguages.BASE;
    if (legacyConfig.react) return legacyLanguages.REACT;
    if (legacyConfig.reactHooks) return legacyLanguages.REACT_HOOKS;
    return null;
  })();

  const path = [
    ...(isLegacy ? [configTypes.LEGACY, legacyLanguage] : [language]),
    prettierText,
    tsOrJsText,
    eslintConfigName,
  ]
    .filter(Boolean)
    .join('/');

  return {
    path: `templates/${path}`,
    url: pc.blue(`${baseGithubUrl}/${path}`),
  };
};

export default getConfigUrl;

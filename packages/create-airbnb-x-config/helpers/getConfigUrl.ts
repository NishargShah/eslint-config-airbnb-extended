import pc from 'picocolors';

import { configTypes, legacyLanguages } from '@/constants';
import { subFolders } from '@/lib/templates/constants';

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
    'configType' | 'typescript' | 'prettier' | 'strictConfig' | 'language' | 'legacyConfig'
  >,
) => GetConfigUrlOutput | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { configType, typescript, prettier, strictConfig, language, legacyConfig } = args;
  const isLegacy = configType === configTypes.LEGACY;

  const prettierText = prettier ? 'prettier' : null;
  const tsOrJsText = typescript ? 'ts' : 'js';
  const legacyLanguage = (() => {
    if (configType === configTypes.EXTENDED) return null;

    if (legacyConfig.base) return legacyLanguages.BASE;
    // NOTE: React Hooks should come first in the condition, because if someone selects "Yes", it must appear in the config otherwise, it won’t be reached.
    if (legacyConfig.reactHooks) return legacyLanguages.REACT_HOOKS;
    if (legacyConfig.react) return legacyLanguages.REACT;
    return null;
  })();

  const strictOrDefaultText = (() => {
    if (!strictConfig || strictConfig.length === 0) return [subFolders.DEFAULT];

    const strictFolder = strictConfig.toSorted((a, b) => a.localeCompare(b)).join('-');
    return [subFolders.STRICT, strictFolder];
  })();

  const path = [
    ...(isLegacy ? [configTypes.LEGACY, legacyLanguage] : [language]),
    prettierText,
    tsOrJsText,
    ...strictOrDefaultText,
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

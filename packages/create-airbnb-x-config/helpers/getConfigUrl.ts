import pc from 'picocolors';

import { configTypes, languages } from '@/constants';

import type { NonNullableArgsOutput } from '@/utils/types';

export const eslintConfigName = 'eslint.config.mjs';
export const baseGithubUrl =
  'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config/templates';

interface GetConfigUrlOutput {
  path: string;
  url: string;
}

export type GetConfigUrl = (
  args: Pick<NonNullableArgsOutput, 'configType' | 'typescript' | 'prettier' | 'language'>,
) => GetConfigUrlOutput | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { configType, typescript, prettier, language } = args;
  const isLegacy = configType === configTypes.LEGACY;

  if (!isLegacy && language === languages.OTHER) return null;

  const prettierText = prettier ? 'prettier' : null;
  const tsOrJsText = typescript ? 'ts' : 'js';
  const path = [
    isLegacy ? configTypes.LEGACY : language,
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

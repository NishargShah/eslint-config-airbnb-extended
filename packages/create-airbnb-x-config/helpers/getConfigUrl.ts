import pc from 'picocolors';

import { languages } from '@/constants';

import type { InstallPackagesArgs } from '@/helpers/installPackages';

export const eslintConfigName = 'eslint.config.mjs';
export const baseGithubUrl =
  'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config/templates';

interface GetConfigUrlOutput {
  path: string;
  url: string;
}

type GetConfigUrl = (args: InstallPackagesArgs) => GetConfigUrlOutput | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { typescript, prettier, language } = args;

  if (language === languages.OTHER) return null;

  const nestedFolderName = `${prettier ? 'prettier/' : ''}${typescript ? 'ts' : 'js'}`;
  const path = `${language}/${nestedFolderName}/${eslintConfigName}`;

  return {
    path: `templates/${path}`,
    url: pc.blue(`${baseGithubUrl}/${path}`),
  };
};

export default getConfigUrl;

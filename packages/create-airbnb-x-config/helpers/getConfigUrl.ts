import pc from 'picocolors';

import { languages } from '@/constants';

import type { InstallPackagesArgs } from '@/helpers/installPackages';

const baseGithubUrl =
  'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/create-airbnb-x-config/templates';

type GetConfigUrl = (args: InstallPackagesArgs) => string | null;

const getConfigUrl: GetConfigUrl = (args) => {
  const { typescript, prettier, language } = args;

  if (language === languages.OTHER) return null;

  const nestedFolderName = `${prettier ? 'prettier/' : ''}${typescript ? 'ts' : 'js'}`;
  const eslintConfigName = 'eslint.config.mjs';

  return pc.blue(`${baseGithubUrl}/${language}/${nestedFolderName}/${eslintConfigName}`);
};

export default getConfigUrl;

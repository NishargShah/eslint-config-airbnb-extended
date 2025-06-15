import { configTypes, languages } from '@/constants';
import getFolders from '@/lib/templates/getAllFolders';

export const languagePreferences = {
  JAVASCRIPT: 'js',
  TYPESCRIPT: 'ts',
} as const;

export const subFolders = {
  ...languagePreferences,
  PRETTIER: 'prettier',
  BASE: 'base',
  REACT: 'react',
} as const;

const defaultSubFolders = [
  subFolders.JAVASCRIPT,
  subFolders.TYPESCRIPT,
  {
    [subFolders.PRETTIER]: [subFolders.JAVASCRIPT, subFolders.TYPESCRIPT],
  },
];

export const templateConstants = {
  FOLDER_NAME: 'templates',
  SUB_FOLDERS: {
    lol: [],
    [configTypes.LEGACY]: [
      {
        [subFolders.BASE]: defaultSubFolders,
        [subFolders.REACT]: defaultSubFolders,
      },
    ],
    [languages.REACT]: defaultSubFolders,
    [languages.NEXT]: defaultSubFolders,
    [languages.NODE]: defaultSubFolders,
  },
};

export const allFolders = getFolders(templateConstants.SUB_FOLDERS, [
  templateConstants.FOLDER_NAME,
]);

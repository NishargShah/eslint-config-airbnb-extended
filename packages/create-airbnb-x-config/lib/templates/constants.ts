import { configTypes, languages } from '@/constants';
import getFolders from '@/lib/templates/getAllFolders';

import type { Folders } from '@/lib/templates/getAllFolders';

export const templateConstants = {
  FOLDER_NAME: 'templates',
} as const;

export const languagePreferences = {
  JAVASCRIPT: 'js',
  TYPESCRIPT: 'ts',
} as const;

const subFolders = {
  ...languagePreferences,
  PRETTIER: 'prettier',
  BASE: 'base',
  REACT: 'react',
} as const;

const defaultLanguagePreferencesSubFolders = {
  [subFolders.JAVASCRIPT]: {
    meta: {
      languagePreference: languagePreferences.JAVASCRIPT,
    },
  },
  [subFolders.TYPESCRIPT]: {
    meta: {
      languagePreference: languagePreferences.TYPESCRIPT,
    },
  },
} satisfies Folders;

const defaultSubFolders = {
  ...defaultLanguagePreferencesSubFolders,
  [subFolders.PRETTIER]: {
    data: defaultLanguagePreferencesSubFolders,
    meta: {
      hasPrettier: true,
    },
  },
} satisfies Folders;

export const folders = {
  [configTypes.LEGACY]: {
    data: {
      [subFolders.BASE]: {
        data: defaultSubFolders,
        meta: {},
      },
      [subFolders.REACT]: {
        data: defaultSubFolders,
        meta: {},
      },
    },
  },
  [languages.REACT]: {
    data: defaultSubFolders,
    meta: {
      language: languages.REACT,
    },
  },
  [languages.NEXT]: {
    data: defaultSubFolders,
    meta: {
      language: languages.NEXT,
    },
  },
  [languages.NODE]: {
    data: defaultSubFolders,
    meta: {
      language: languages.NODE,
    },
  },
} satisfies Folders;

export const allFolders = getFolders(folders, [templateConstants.FOLDER_NAME]);

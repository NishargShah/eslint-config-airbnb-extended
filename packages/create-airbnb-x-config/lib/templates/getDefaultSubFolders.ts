import { strictConfigs } from '@/constants';
import { languagePreferences, subFolders } from '@/lib/templates/constants';

import type { Folders } from '@/lib/templates/getAllFolders';

const strictDefaultSubFolders = {
  [subFolders.STRICT]: {
    data: {
      [subFolders.STRICT_IMPORT]: {
        meta: {
          strictConfig: [strictConfigs.IMPORT],
        },
      },
      [subFolders.STRICT_IMPORT_REACT]: {
        meta: {
          strictConfig: [strictConfigs.IMPORT, strictConfigs.REACT],
        },
      },
      [subFolders.STRICT_IMPORT_REACT_TYPESCRIPT]: {
        meta: {
          strictConfig: [strictConfigs.IMPORT, strictConfigs.REACT, strictConfigs.TYPESCRIPT],
        },
      },
      [subFolders.STRICT_REACT]: {
        meta: {
          strictConfig: [strictConfigs.REACT],
        },
      },
      [subFolders.STRICT_REACT_TYPESCRIPT]: {
        meta: {
          strictConfig: [strictConfigs.REACT, strictConfigs.TYPESCRIPT],
        },
      },
      [subFolders.STRICT_TYPESCRIPT]: {
        meta: {
          strictConfig: [strictConfigs.TYPESCRIPT],
        },
      },
    },
    meta: {},
  },
} satisfies Folders;

interface GetDefaultSubFoldersParams {
  strict: boolean;
}

type GetDefaultSubFolders = (params: GetDefaultSubFoldersParams) => Folders;

const getDefaultSubFolders: GetDefaultSubFolders = ({ strict }) => {
  const defaultFolders = {
    ...(strict ? strictDefaultSubFolders : null),
    [subFolders.DEFAULT]: {
      meta: {},
    },
  };

  const defaultLanguagePreferencesSubFolders = {
    [subFolders.JAVASCRIPT]: {
      data: defaultFolders,
      meta: {
        languagePreference: languagePreferences.JAVASCRIPT,
      },
    },
    [subFolders.TYPESCRIPT]: {
      data: defaultFolders,
      meta: {
        languagePreference: languagePreferences.TYPESCRIPT,
      },
    },
  } satisfies Folders;

  return {
    ...defaultLanguagePreferencesSubFolders,
    [subFolders.PRETTIER]: {
      data: defaultLanguagePreferencesSubFolders,
      meta: {
        hasPrettier: true,
      },
    },
  } satisfies Folders;
};

export default getDefaultSubFolders;

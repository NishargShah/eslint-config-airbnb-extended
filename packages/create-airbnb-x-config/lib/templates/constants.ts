import { languages } from '@/constants';

export const languagePreferences = {
  JAVASCRIPT: 'js',
  TYPESCRIPT: 'ts',
} as const;

export const subFolders = {
  ...languagePreferences,
  PRETTIER: 'prettier',
};

export const templateConstants = {
  FOLDER_NAME: 'templates',
  FOLDER_NAMES: Object.values(languages).filter((language) => language !== languages.OTHER),
  SUB_FOLDER_NAMES: [
    subFolders.JAVASCRIPT,
    subFolders.TYPESCRIPT,
    ...Object.values(languagePreferences).map(
      (languagePreference) => `${subFolders.PRETTIER}/${languagePreference}`,
    ),
  ],
} as const;

export const allFolders = templateConstants.FOLDER_NAMES.flatMap((folder) =>
  templateConstants.SUB_FOLDER_NAMES.map(
    (subFolder) => `${templateConstants.FOLDER_NAME}/${folder}/${subFolder}`,
  ),
);

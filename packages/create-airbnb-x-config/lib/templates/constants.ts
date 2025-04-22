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

export const startingNotes = [
  '/**',
  ' * THIS FILE WAS AUTO-GENERATED.',
  ' * PLEASE DO NOT EDIT IT MANUALLY.',
  ' * ===============================',
  " * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.",
  ' */',
];

export const imports = [
  "import path from 'node:path';",
  '',
  "import { includeIgnoreFile } from '@eslint/compat';",
  "import js from '@eslint/js';",
  "import { configs, plugins } from 'eslint-config-airbnb-extended';",
];

export const gitignoreCode = [
  "export const projectRoot = path.resolve('.');",
  "export const gitignorePath = path.resolve(projectRoot, '.gitignore');",
];

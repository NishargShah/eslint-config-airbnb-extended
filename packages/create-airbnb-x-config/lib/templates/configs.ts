import { configTypes, languages, legacyConfigs } from '@/constants';
import { languagePreferences } from '@/lib/templates/constants';

import type { Content } from '@/lib/templates/contentFormatter';
import type { GetContentParams } from '@/lib/templates/getContent';

// TYPES

type Config = (params: GetContentParams) => Content;

// STARTING COMMENTS

export const startingComments = [
  '/**',
  ' * THIS FILE WAS AUTO-GENERATED.',
  ' * PLEASE DO NOT EDIT IT MANUALLY.',
  ' * ===============================',
  " * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.",
  ' */',
];

// IMPORTS

export const imports: Config = ({ type, configurations }) => [
  "import path from 'node:path';",
  '',
  "import { includeIgnoreFile } from '@eslint/compat';",
  "import js from '@eslint/js';",
  type === configTypes.LEGACY
    ? "import { configs } from 'eslint-config-airbnb-extended/legacy';"
    : "import { configs, plugins } from 'eslint-config-airbnb-extended';",
  ...(configurations.prettier
    ? [
        "import { rules as prettierConfigRules } from 'eslint-config-prettier';",
        "import prettierPlugin from 'eslint-plugin-prettier';",
      ]
    : []),
];

// GITIGNORE CONFIG

export const gitignoreCode = [
  "export const projectRoot = path.resolve('.');",
  "export const gitignorePath = path.resolve(projectRoot, '.gitignore');",
];

// JAVASCRIPT CONFIG

export const jsConfig: Config = ({ type, language }) => {
  const isLegacy = type === configTypes.LEGACY;
  const jsArray = (() => {
    if (isLegacy) {
      return language === legacyConfigs.BASE
        ? ['// Airbnb Base Recommended Config', '...configs.base.recommended,']
        : [];
    }

    return [
      '// Stylistic Plugin',
      'plugins.stylistic,',
      '// Import X Plugin',
      'plugins.importX,',
      '// Airbnb Base Recommended Config',
      '...configs.base.recommended,',
    ];
  })();

  return [
    'const jsConfig = [',
    [
      '// ESLint Recommended Rules',
      '{',
      ["name: 'js/config',", '...js.configs.recommended,'],
      '},',
      ...jsArray,
    ],
    '];',
  ];
};

// REACT & NEXT CONFIG

export const reactConfig: Config = ({ type, language }) => {
  const isLegacy = type === configTypes.LEGACY;
  const isNextJs = language === languages.NEXT;

  const reactArray = [
    '// React Plugin',
    'plugins.react,',
    '// React Hooks Plugin',
    'plugins.reactHooks,',
    '// React JSX A11y Plugin',
    'plugins.reactA11y,',
  ];

  const nextArray = ['// Next Plugin', 'plugins.next,'];

  const legacyArray = [
    'const reactConfig = [',
    ['// Airbnb React Recommended Config', '...configs.react.recommended,'],
    '];',
  ];

  const extendedArray = [
    `const ${language}Config = [`,
    [
      ...reactArray,
      ...(isNextJs ? nextArray : []),
      `// Airbnb ${isNextJs ? 'Next' : 'React'} Recommended Config`,
      `...configs.${language}.recommended,`,
    ],
    '];',
  ];

  return isLegacy ? legacyArray : extendedArray;
};

// NODE CONFIG

export const nodeConfig = [
  'const nodeConfig = [',
  [
    '// Node Plugin',
    'plugins.node,',
    '// Airbnb Node Recommended Config',
    '...configs.node.recommended,',
  ],
  '];',
];

// TYPESCRIPT CONFIG

export const typescriptConfig: Config = ({ type, language }) => {
  const isLegacy = type === configTypes.LEGACY;
  const reactArray = ['// Airbnb React TypeScript Config', '...configs.react.typescript,'];
  const nextArray = ['// Airbnb Next TypeScript Config', '...configs.next.typescript,'];

  const legacyArray = [
    'const typescriptConfig = [',
    language === legacyConfigs.BASE
      ? ['// Airbnb Base TypeScript Config', '...configs.base.typescript,']
      : ['// Airbnb React TypeScript Config', '...configs.react.typescript,'],
    '];',
  ];

  const extendedArray = [
    'const typescriptConfig = [',
    [
      '// TypeScript ESLint Plugin',
      'plugins.typescriptEslint,',
      '// Airbnb Base TypeScript Config',
      '...configs.base.typescript,',
      ...(language === languages.REACT ? reactArray : []),
      ...(language === languages.NEXT ? nextArray : []),
    ],
    '];',
  ];

  return isLegacy ? legacyArray : extendedArray;
};

// Prettier Config

export const prettierConfig = [
  'const prettierConfig = [',
  [
    '// Prettier Plugin',
    '{',
    ["name: 'prettier/plugin/config',", 'plugins: {', ['prettier: prettierPlugin,'], '},'],
    '},',
  ],
  [
    '// Prettier Config',
    '{',
    [
      "name: 'prettier/config',",
      'rules: {',
      ['...prettierConfigRules,', "'prettier/prettier': 'error',"],
      '},',
    ],
    '},',
  ],
  '];',
];

// DEFAULT CONFIG

export const defaultConfig: Config = ({ type, language, languagePreference, configurations }) => {
  const isLegacy = type === configTypes.LEGACY;

  const reactArray = ['// React Config', '...reactConfig,'];
  const nextArray = ['// Next Config', '...nextConfig,'];
  const typescriptArray = ['// TypeScript Config', '...typescriptConfig,'];
  const nodeArray = ['// Node Config', '...nodeConfig,'];
  const prettierArray = ['// Prettier Config', '...prettierConfig,'];

  return [
    'export default [',
    [
      '// Ignore .gitignore files/folder in eslint',
      'includeIgnoreFile(gitignorePath),',
      '// Javascript Config',
      '...jsConfig,',
      ...((isLegacy && language === legacyConfigs.REACT) ||
      (!isLegacy && language === languages.REACT)
        ? reactArray
        : []),
      ...(!isLegacy && language === languages.NEXT ? nextArray : []),
      ...(!isLegacy && language === languages.NODE ? nodeArray : []),
      ...(languagePreference === languagePreferences.TYPESCRIPT ? typescriptArray : []),
      ...(configurations.prettier ? prettierArray : []),
    ],
    '];',
  ];
};

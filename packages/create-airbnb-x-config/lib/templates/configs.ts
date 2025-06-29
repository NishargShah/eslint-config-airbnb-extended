import { configTypes, languages, legacyLanguages, strictConfigs } from '@/constants';
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

export const imports: Config = ({ type, configurations, strictConfig }) => {
  const isLegacy = type === configTypes.LEGACY;
  const hasStrictConfig = strictConfig.length > 0;

  const importStatement = (() => {
    if (isLegacy) return "import { configs } from 'eslint-config-airbnb-extended/legacy';";
    if (hasStrictConfig) {
      return "import { rules, configs, plugins } from 'eslint-config-airbnb-extended';";
    }
    return "import { configs, plugins } from 'eslint-config-airbnb-extended';";
  })();

  return [
    "import path from 'node:path';",
    '',
    "import { includeIgnoreFile } from '@eslint/compat';",
    "import js from '@eslint/js';",
    importStatement,
    ...(configurations.prettier
      ? [
          "import { rules as prettierConfigRules } from 'eslint-config-prettier';",
          "import prettierPlugin from 'eslint-plugin-prettier';",
        ]
      : []),
  ];
};

// GITIGNORE CONFIG

export const gitignoreCode = ["const gitignorePath = path.resolve('.', '.gitignore');"];

// JAVASCRIPT CONFIG

export const jsConfig: Config = ({ type, language, strictConfig }) => {
  const isLegacy = type === configTypes.LEGACY;
  const hasStrictImportConfig = strictConfig.includes(strictConfigs.IMPORT);

  const jsArray = (() => {
    if (isLegacy) {
      return language === legacyLanguages.BASE
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
      ...(hasStrictImportConfig ? ['// Strict Import Config', 'rules.base.importsStrict,'] : []),
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

export const reactConfig: Config = ({ type, language, strictConfig }) => {
  const isLegacy = type === configTypes.LEGACY;
  const isNextJs = language === languages.NEXT;
  const hasStrictReactConfig = strictConfig.includes(strictConfigs.REACT);

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
    language === legacyLanguages.REACT_HOOKS
      ? ['// Airbnb React Hooks Config', '...configs.react.hooks,']
      : [],
    '];',
  ];

  const extendedArray = [
    `const ${language}Config = [`,
    [
      ...reactArray,
      ...(isNextJs ? nextArray : []),
      `// Airbnb ${isNextJs ? 'Next' : 'React'} Recommended Config`,
      `...configs.${language}.recommended,`,
      ...(hasStrictReactConfig ? ['// Strict React Config', 'rules.react.strict,'] : []),
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

export const typescriptConfig: Config = ({ type, language, strictConfig }) => {
  const isLegacy = type === configTypes.LEGACY;
  const reactArray = ['// Airbnb React TypeScript Config', '...configs.react.typescript,'];
  const nextArray = ['// Airbnb Next TypeScript Config', '...configs.next.typescript,'];
  const hasStrictTypescriptConfig = strictConfig.includes(strictConfigs.TYPESCRIPT);

  const legacyArray = [
    'const typescriptConfig = [',
    language === legacyLanguages.BASE
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
      ...(hasStrictTypescriptConfig
        ? ['// Strict TypeScript Config', 'rules.typescript.typescriptEslintStrict,']
        : []),
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
      ...((isLegacy &&
        ([legacyLanguages.REACT, legacyLanguages.REACT_HOOKS] as string[]).includes(language)) ||
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

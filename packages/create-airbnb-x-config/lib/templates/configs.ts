import { languagePreferences } from '@/lib/templates/constants';
import { languages } from '@/constants';

import type { Content } from '@/lib/templates/contentFormatter';
import type { GetContentParams } from '@/lib/templates/getContent';

// TYPES

type Config = (params: GetContentParams) => Content;

// JAVASCRIPT CONFIG

export const jsConfig = [
  'const jsConfig = [',
  [
    '// ESLINT RECOMMENDED RULES',
    '{',
    ["name: 'js/config',", '...js.configs.recommended,'],
    '},',
    '// Stylistic Plugin',
    'plugins.stylistic,',
    '// Import X Plugin',
    'plugins.importX,',
    '// Airbnb Base Recommended Config',
    '...configs.base.recommended,',
  ],
  '];',
];

// REACT & NEXT CONFIG

export const reactConfig: Config = ({ language }) => {
  const isNextJs = language === languages.NEXT;

  const reactArray = [
    '// React Plugin',
    'plugins.react,',
    '// React Hooks Plugin',
    'plugins.reactHooks,',
    '// React JSX-A11y Plugin',
    'plugins.reactA11y,',
  ];

  const nextArray = ['// Next Plugin', 'plugins.next,'];

  return [
    `const ${language}Config = [`,
    [
      ...reactArray,
      ...(isNextJs ? nextArray : []),
      `// Airbnb ${isNextJs ? 'Next' : 'React'} Recommended Config`,
      `...configs.${language}.recommended,`,
    ],
    '];',
  ];
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

export const typescriptConfig: Config = ({ language }) => {
  const reactArray = ['// Airbnb React TypeScript Config', '...configs.react.typescript,'];
  const nextArray = ['// Airbnb Next TypeScript Config', '...configs.next.typescript,'];

  return [
    'const typescriptConfig = [',
    [
      '// Typescript ESLint Plugin',
      'plugins.typescriptEslint,',
      '// Airbnb Base TypeScript Config',
      '...configs.base.typescript,',
      ...(language === languages.REACT ? reactArray : []),
      ...(language === languages.NEXT ? nextArray : []),
    ],
    '];',
  ];
};

// PRETTIER CONFIG

export const prettierConfig = [
  'const prettierConfig = [',
  // ['plugins.typescriptEslint,', '// Airbnb Base TypeScript Config', '...configs.base.typescript,'],
  '];',
];

// DEFAULT CONFIG

export const defaultConfig: Config = ({ language, languagePreference, configurations }) => {
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
      ...(language === languages.REACT ? reactArray : []),
      ...(language === languages.NEXT ? nextArray : []),
      ...(language === languages.NODE ? nodeArray : []),
      ...(languagePreference === languagePreferences.TYPESCRIPT ? typescriptArray : []),
      ...(configurations.prettier ? prettierArray : []),
    ],
    '];',
  ];
};

import stylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

type GetStylisticLegacyConfigLanguage = 'javascript' | 'typescript' | 'react';

type GetStylisticLegacyConfig = (language: GetStylisticLegacyConfigLanguage) => Linter.Config;

const getStylisticLegacyConfig: GetStylisticLegacyConfig = (language) => {
  const legacyConfig = stylistic.configs['disable-legacy'];
  const REACT = 'react/';
  const TYPESCRIPT = '@typescript-eslint/';

  const rules = (() => {
    if (!legacyConfig.rules) return;

    return Object.entries(legacyConfig.rules).reduce<Linter.Config['rules']>(
      (acc, [key, value]) => {
        if (language === 'javascript' && !key.startsWith(REACT) && !key.startsWith(TYPESCRIPT)) {
          return { ...acc, [key]: value };
        }

        if (language === 'typescript' && key.startsWith(TYPESCRIPT)) {
          return { ...acc, [key]: value };
        }

        if (language === 'react' && key.startsWith(REACT)) {
          return { ...acc, [key]: value };
        }
      },
      {},
    );
  })();

  return rules ? { ...legacyConfig, rules } : legacyConfig;
};

export default getStylisticLegacyConfig;

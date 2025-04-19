import stylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

type GetStylisticLegacyConfigLanguage = 'javascript' | 'typescript' | 'react';

type GetStylisticLegacyConfig = (language: GetStylisticLegacyConfigLanguage) => Linter.Config;

const getStylisticLegacyConfig: GetStylisticLegacyConfig = (language) => {
  const legacyConfig = stylistic.configs['disable-legacy'];
  const REACT = 'react/';
  const TYPESCRIPT = '@typescript-eslint/';

  const rules = Object.entries(legacyConfig.rules ?? {}).reduce<Linter.Config['rules'] | null>(
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

      return null;
    },
    {},
  );

  return rules ? { ...legacyConfig, rules } : legacyConfig;
};

export default getStylisticLegacyConfig;

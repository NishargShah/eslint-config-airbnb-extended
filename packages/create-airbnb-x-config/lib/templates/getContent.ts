import { configTypes, languages, legacyLanguages } from '@/constants';
import {
  defaultConfig,
  gitignoreCode,
  imports,
  jsConfig,
  nodeConfig,
  prettierConfig,
  reactConfig,
  startingComments,
  typescriptConfig,
} from '@/lib/templates/configs';
import { languagePreferences } from '@/lib/templates/constants';
import contentFormatter from '@/lib/templates/contentFormatter';

import type { strictConfigs } from '@/constants';
import type { ValueOf } from '@/utils/types';

interface GetContentConfigurations {
  prettier: boolean;
}

export interface GetContentParams {
  type: ValueOf<typeof configTypes>;
  language: ValueOf<typeof languages> | ValueOf<typeof legacyLanguages>;
  languagePreference: ValueOf<typeof languagePreferences>;
  configurations: GetContentConfigurations;
  strictConfig: ValueOf<typeof strictConfigs>[];
}

type GetContent = (params: GetContentParams) => string;

const getContent: GetContent = (params) => {
  const { type, language, languagePreference, configurations } = params;
  const isLegacy = type === configTypes.LEGACY;

  const reactArray =
    (isLegacy &&
      ([legacyLanguages.REACT, legacyLanguages.REACT_HOOKS] as string[]).includes(language)) ||
    (!isLegacy && ([languages.REACT, languages.NEXT] as string[]).includes(language))
      ? [...reactConfig(params), '']
      : [];

  const typescriptArray =
    languagePreference === languagePreferences.TYPESCRIPT ? [...typescriptConfig(params), ''] : [];

  const nodeArray = !isLegacy && language === languages.NODE ? [...nodeConfig, ''] : [];

  const prettierArray = configurations.prettier ? [...prettierConfig, ''] : [];

  const defaultConfigArray = [...defaultConfig(params), ''];

  const content = contentFormatter([
    ...startingComments,
    '',
    ...imports(params),
    '',
    ...gitignoreCode,
    '',
    ...jsConfig(params),
    '',
    ...reactArray,
    ...nodeArray,
    ...typescriptArray,
    ...prettierArray,
    ...defaultConfigArray,
  ]);

  return content.join('\n');
};

export default getContent;

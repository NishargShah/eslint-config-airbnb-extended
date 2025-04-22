import {
  defaultConfig,
  jsConfig,
  nodeConfig,
  prettierConfig,
  reactConfig,
  typescriptConfig,
} from '@/lib/templates/configs';
import {
  gitignoreCode,
  imports,
  languagePreferences,
  startingNotes,
} from '@/lib/templates/constants';
import contentFormatter from '@/lib/templates/contentFormatter';
import { languages } from '@/constants';
import { ValueOf } from '@/utils/types';

interface GetContentConfigurations {
  prettier: boolean;
}

export interface GetContentParams {
  language: Exclude<ValueOf<typeof languages>, typeof languages.OTHER>;
  languagePreference: ValueOf<typeof languagePreferences>;
  configurations: GetContentConfigurations;
}

type GetContent = (params: GetContentParams) => string;

const getContent: GetContent = (params) => {
  const { language, languagePreference, configurations } = params;

  const reactArray = ([languages.REACT, languages.NEXT] as string[]).includes(language)
    ? [...reactConfig(params), '']
    : [];

  const typescriptArray =
    languagePreference === languagePreferences.TYPESCRIPT ? [...typescriptConfig(params), ''] : [];

  const nodeArray = language === languages.NODE ? [...nodeConfig, ''] : [];

  const prettierArray = configurations.prettier ? [...prettierConfig, ''] : [];

  const content = contentFormatter([
    ...startingNotes,
    '',
    ...imports,
    '',
    ...gitignoreCode,
    '',
    ...jsConfig,
    '',
    ...reactArray,
    ...nodeArray,
    ...typescriptArray,
    ...prettierArray,
    ...defaultConfig(params),
    '',
  ]);

  return content.join('\n');
};

export default getContent;

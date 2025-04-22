import {
  defaultConfig,
  gitignoreCode,
  imports,
  jsConfig,
  nodeConfig,
  reactConfig,
  startingComments,
  typescriptConfig,
} from '@/lib/templates/configs';
import { languagePreferences } from '@/lib/templates/constants';
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
  const { language, languagePreference } = params;

  const reactArray = ([languages.REACT, languages.NEXT] as string[]).includes(language)
    ? [...reactConfig(params), '']
    : [];

  const typescriptArray =
    languagePreference === languagePreferences.TYPESCRIPT ? [...typescriptConfig(params), ''] : [];

  const nodeArray = language === languages.NODE ? [...nodeConfig, ''] : [];

  const content = contentFormatter([
    ...startingComments,
    '',
    ...imports(params),
    '',
    ...gitignoreCode,
    '',
    ...jsConfig,
    '',
    ...reactArray,
    ...nodeArray,
    ...typescriptArray,
    ...defaultConfig(params),
    '',
  ]);

  return content.join('\n');
};

export default getContent;

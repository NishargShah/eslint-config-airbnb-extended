import { createAutoTypeScriptImportResolver } from '@/helpers/createAutoTypeScriptImportResolver';
import { getDevDepsList } from '@/helpers/getDevDepsList';
import { getImportSettings } from '@/helpers/getImportSettings';
// eslint-disable-next-line import-x/no-namespace
import * as extensions from '@/utils/extensions';

export const helpers = {
  createAutoTypeScriptImportResolver,
  extensions,
  getDevDepsList,
  getImportSettings,
} as const;

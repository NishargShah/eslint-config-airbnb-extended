/* eslint-disable import-x/no-rename-default, unicorn/prefer-export-from */

import allConfigs from '@/configs';
import allExtensions from '@/extensions';
import allPlugins from '@/plugins';
import allRules from '@/rules';

/**
 * Direct export isn't allowed, it will increase the size of d.ts
 */
export const rules = allRules;

export const configs = allConfigs;

export const plugins = allPlugins;

export const extensions = allExtensions;

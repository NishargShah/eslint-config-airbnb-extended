/* eslint-disable unicorn/prefer-export-from */

import allConfigs from '@/legacy/configs';
import allRules from '@/legacy/rules';

/**
 * Direct export isn't allowed, it will increase the size of d.ts
 */
export const rules = allRules;

export const configs = allConfigs;

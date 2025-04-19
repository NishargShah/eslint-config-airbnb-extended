import stylisticPlugin from '@stylistic/eslint-plugin';
import importXPlugin from 'eslint-plugin-import-x';
import reactJsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nodePlugin from 'eslint-plugin-n';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import importsRules, { deprecatedImportsRules } from '@/rules/imports';
import nextBaseRules from '@/rules/next/nextBase';
import nextCoreWebVitalsRules from '@/rules/next/nextCoreWebVitals';
import nodeBaseRules, { deprecatedNodeBaseRules } from '@/rules/node/nodeBase';
import nodeGlobalsRules from '@/rules/node/nodeGlobals';
import nodeNoUnsupportedFeaturesRules from '@/rules/node/nodeNoUnsupportedFeatures';
import nodePromisesRules from '@/rules/node/nodePromises';
import reactBaseRules, { deprecatedReactBaseRules } from '@/rules/react/react';
import reactHooksRules from '@/rules/react/reactHooks';
import reactJsxA11yRules, { deprecatedReactJsxA11yRules } from '@/rules/react/reactJsxA11y';
import reactStylisticRules, {
  deprecatedReactStylisticPlusRules,
} from '@/rules/react/reactStylistic';
import stylisticRules, { deprecatedStylisticRules } from '@/rules/stylistic';
import stylisticPlusRules from '@/rules/stylisticPlus';
import typescriptStylisticRules, {
  deprecatedTypescriptStylisticRules,
} from '@/rules/typescript/typescriptStylistic';
import typescriptStylisticPlusRules from '@/rules/typescript/typescriptStylisticPlus';

// eslint-disable-next-line @typescript-eslint/no-require-imports,unicorn/prefer-module
const nextPlugin = require('@next/eslint-plugin-next');

const getRulesArray = (prefix: string, arr: string[]) =>
  arr.filter((rule) => rule.startsWith(prefix));

const checkImportsUpdates = async () => {
  const localRules = getRulesArray('import-x/', Object.keys(importsRules.rules));
  const deprecatedLocalRules = getRulesArray(
    'import-x/',
    Object.keys(deprecatedImportsRules.rules),
  );

  const remoteRules = Object.keys(importXPlugin.rules);

  if (localRules.length + deprecatedLocalRules.length === remoteRules.length) return true;

  throw new Error('Import X Plugin Updated');
};

const checkNodeUpdates = async () => {
  const localRules = getRulesArray('n/', [
    ...Object.keys(nodeBaseRules.rules),
    ...Object.keys(nodeGlobalsRules.rules),
    ...Object.keys(nodePromisesRules.rules),
    ...Object.keys(nodeNoUnsupportedFeaturesRules.rules),
  ]);

  const deprecatedLocalRules = getRulesArray('n/', Object.keys(deprecatedNodeBaseRules.rules));
  const remoteRules = nodePlugin.rules ? Object.keys(nodePlugin.rules) : [];

  if (localRules.length + deprecatedLocalRules.length === remoteRules.length) return true;

  throw new Error('Node Plugin Updated');
};

const checkReactUpdates = async () => {
  const localRules = getRulesArray('react/', Object.keys(reactBaseRules.rules));
  const deprecatedLocalRules = getRulesArray('react/', Object.keys(deprecatedReactBaseRules.rules));
  const remoteRules = Object.keys(reactPlugin.rules);

  if (localRules.length + deprecatedLocalRules.length === remoteRules.length) return true;

  throw new Error('React Plugin Updated');
};

const checkReactJsxA11yUpdates = async () => {
  const localRules = getRulesArray('jsx-a11y/', Object.keys(reactJsxA11yRules.rules));
  const deprecatedLocalRules = getRulesArray(
    'jsx-a11y/',
    Object.keys(deprecatedReactJsxA11yRules.rules),
  );

  const remoteRules = reactJsxA11yPlugin.rules ? Object.keys(reactJsxA11yPlugin.rules) : [];

  if (localRules.length + deprecatedLocalRules.length === remoteRules.length) return true;

  throw new Error('React JSX A11y Plugin Updated');
};

const checkReactHooksUpdates = async () => {
  const localRules = getRulesArray('react-hooks/', Object.keys(reactHooksRules.rules));
  const remoteRules = Object.keys(reactHooksPlugin.rules);

  if (localRules.length === remoteRules.length) return true;

  throw new Error('React Hooks Plugin Updated');
};

const checkNextUpdates = async () => {
  const localRules = getRulesArray('@next/next/', [
    ...Object.keys(nextBaseRules.rules),
    ...Object.keys(nextCoreWebVitalsRules.rules),
  ]);

  const remoteRules = [
    ...Object.keys(nextPlugin.configs.recommended.rules),
    ...Object.keys(nextPlugin.configs['core-web-vitals'].rules),
  ];

  if (localRules.length === remoteRules.length) return true;

  throw new Error('Next Plugin Updated');
};

const checkStylisticUpdates = async () => {
  const localRules = getRulesArray('@stylistic/', [
    ...new Set([
      ...Object.keys(stylisticRules.rules),
      ...Object.keys(deprecatedStylisticRules.rules),
      ...Object.keys(typescriptStylisticRules.rules),
      ...Object.keys(deprecatedTypescriptStylisticRules.rules),
      ...Object.keys(reactStylisticRules.rules),
      ...Object.keys(deprecatedReactStylisticPlusRules.rules),
      ...Object.keys(stylisticPlusRules.rules),
      ...Object.keys(typescriptStylisticPlusRules.rules),
    ]),
  ]);

  const remoteRules = Object.keys(stylisticPlugin.rules);

  if (localRules.length === remoteRules.length) return true;

  throw new Error('Stylistic Plugin Updated');
};

const checkUpdates = async () => {
  await checkImportsUpdates();
  await checkNodeUpdates();
  await checkReactUpdates();
  await checkReactJsxA11yUpdates();
  await checkReactHooksUpdates();
  await checkNextUpdates();
  await checkStylisticUpdates();
  console.log('Done');
};

// noinspection JSIgnoredPromiseFromCall
checkUpdates();

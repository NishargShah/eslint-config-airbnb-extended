#!/usr/bin/env node

import pc from 'picocolors';
import prompts from 'prompts';

import {
  configTypes,
  defaults,
  eslintConfigName,
  languages,
  legacyConfigs,
  strictConfigs,
} from '@/constants';
import createESLintConfigFile from '@/helpers/createEslintConfigFile';
import getArgs from '@/helpers/getArgs';
import getCommands from '@/helpers/getCommands';
import getConfigUrl from '@/helpers/getConfigUrl';
import installPackages from '@/helpers/installPackages';
import { exit, handleSigTerm, onCancel, onPromptState, success } from '@/utils';

import type { NonNullableArgsOutput } from '@/types';

process.on('SIGINT', handleSigTerm);
process.on('SIGTERM', handleSigTerm);

const run = async () => {
  let args = await getArgs();

  if (args.configType === null) {
    const { configTypeBoolean } = await prompts(
      {
        type: 'toggle',
        name: 'configTypeBoolean',
        message: 'Config type?',
        initial: defaults.configType === configTypes.EXTENDED,
        active: 'Extended',
        inactive: 'Legacy',
        onState: onPromptState,
      },
      {
        onCancel,
      },
    );

    const configType = configTypeBoolean ? configTypes.EXTENDED : configTypes.LEGACY;
    args = {
      ...args,
      configType,
      ...(configType === configTypes.EXTENDED
        ? {
            legacyConfig: null,
          }
        : {
            language: null,
          }),
    };
  }

  if (args.typescript === null) {
    const { typescript } = await prompts(
      {
        type: 'toggle',
        name: 'typescript',
        message: `Are you using ${pc.blue('typescript')}?`,
        initial: defaults.typescript,
        active: 'Yes',
        inactive: 'No',
        onState: onPromptState,
      },
      {
        onCancel,
      },
    );

    args = { ...args, typescript };
  }

  if (args.prettier === null) {
    const { prettier } = await prompts(
      {
        type: 'toggle',
        name: 'prettier',
        message: `Are you using ${pc.cyan('prettier')}?`,
        initial: defaults.prettier,
        active: 'Yes',
        inactive: 'No',
        onState: onPromptState,
      },
      {
        onCancel,
      },
    );

    args = { ...args, prettier };
  }

  if (args.configType === configTypes.EXTENDED) {
    if (!args.language) {
      const { language } = await prompts(
        {
          type: 'select',
          name: 'language',
          message: 'Are you using?',
          choices: [
            {
              title: 'React/React Router',
              description: pc.cyanBright(
                'You are using React.js library or Remix ( React Router 7 ) framework',
              ),
              value: languages.REACT,
            },
            {
              title: 'Next',
              description: pc.blackBright('You are using Next.js framework'),
              value: languages.NEXT,
            },
            {
              title: 'Node',
              description: pc.greenBright('You are using Node or any other frameworks of it'),
              value: languages.NODE,
            },
          ],
          onState: onPromptState,
        },
        {
          onCancel,
        },
      );

      args = { ...args, language };
    }

    if (!args.strictConfig) {
      const { hasStrictConfig } = await prompts(
        {
          type: 'toggle',
          name: 'hasStrictConfig',
          message: `Do you want to add ${pc.cyan('strict')} configs?`,
          initial: defaults.strictConfig,
          active: 'Yes',
          inactive: 'No',
          onState: onPromptState,
        },
        {
          onCancel,
        },
      );

      if (hasStrictConfig) {
        const { strictConfig } = await prompts(
          {
            type: 'multiselect',
            name: 'strictConfig',
            message: 'Select Strict Configs:',
            min: 1,
            choices: [
              {
                title: 'Import',
                description: pc.yellowBright('Strict Import config'),
                value: strictConfigs.IMPORT,
              },
              ...(args.language &&
              ([languages.REACT, languages.NEXT] as string[]).includes(args.language)
                ? [
                    {
                      title: 'React',
                      description: pc.cyanBright('Strict React config'),
                      value: strictConfigs.REACT,
                    },
                  ]
                : []),
              ...(args.typescript
                ? [
                    {
                      title: 'TypeScript',
                      description: pc.blueBright('Strict TypeScript config'),
                      value: strictConfigs.TYPESCRIPT,
                    },
                  ]
                : []),
            ],
            onState: onPromptState,
          },
          {
            onCancel,
          },
        );

        args = { ...args, strictConfig };
      } else {
        args = { ...args, strictConfig: [] };
      }
    }
  }

  if (args.configType === configTypes.LEGACY) {
    if (!args.legacyConfig || args.legacyConfig.base === null || args.legacyConfig.react === null) {
      const { legacyConfigType } = await prompts(
        {
          type: 'select',
          name: 'legacyConfigType',
          message: 'Are you using?',
          choices: [
            {
              title: 'Base Config',
              description: pc.greenBright('eslint-config-airbnb-base'),
              value: legacyConfigs.BASE,
            },
            {
              title: 'React Config',
              description: pc.cyanBright('eslint-config-airbnb'),
              value: legacyConfigs.REACT,
            },
          ],
          onState: onPromptState,
        },
        {
          onCancel,
        },
      );

      args = {
        ...args,
        legacyConfig: {
          ...args.legacyConfig,
          base: legacyConfigType === legacyConfigs.BASE,
          react: legacyConfigType === legacyConfigs.REACT,
        },
      };
    }

    if (args.legacyConfig?.react && args.legacyConfig.reactHooks === null) {
      const { reactHooks } = await prompts(
        {
          type: 'toggle',
          name: 'reactHooks',
          message: 'Are you using hooks?',
          initial: defaults.legacyReactHooks,
          active: 'Yes',
          inactive: 'No',
          onState: onPromptState,
        },
        {
          onCancel,
        },
      );

      args = {
        ...args,
        legacyConfig: {
          ...args.legacyConfig,
          reactHooks,
        },
      };
    }
  }

  if (args.createESLintFile === null) {
    const { createESLintFile } = await prompts(
      {
        type: 'toggle',
        name: 'createESLintFile',
        message: `Should I create an ${pc.blue(eslintConfigName)} file for you?`,
        initial: defaults.createESLintFile,
        active: 'Yes',
        inactive: 'No',
        onState: onPromptState,
      },
      {
        onCancel,
      },
    );

    args = { ...args, createESLintFile };
  }

  if (args.skipInstall === null) {
    const { skipInstall } = await prompts(
      {
        type: 'toggle',
        name: 'skipInstall',
        message: `Do you want to skip the package installation?`,
        initial: defaults.skipInstall,
        active: 'Yes',
        inactive: 'No',
        onState: onPromptState,
      },
      {
        onCancel,
      },
    );

    args = { ...args, skipInstall };
  }

  const newArgs = args as NonNullableArgsOutput;
  const commands = getCommands(newArgs);
  const command = commands.join(' ');
  console.log();

  if (args.createESLintFile) await createESLintConfigFile(newArgs);

  if (args.skipInstall) {
    console.log(
      `${pc.yellowBright('No Worries')}, you can install the packages yourself using your ${pc.blue('favourite')} package manager (${newArgs.packageManager}, maybe? 🤔)`,
    );
    console.log();
    console.log(pc.cyan('Command:'));
    console.log(pc.blue(command));
  } else {
    console.log(
      `${pc.blue('Installing')} packages using ${pc.cyanBright(newArgs.packageManager)}, please wait...`,
    );

    await installPackages(newArgs);
    console.log();
    console.log(pc.yellowBright('Installation Completed'));
    console.log();
    console.log(pc.cyan('Executed Command:'));
    console.log(pc.blue(command));
  }

  console.log();
  console.log(pc.cyan(args.createESLintFile ? 'Created Config:' : 'Config:'));
  console.log(getConfigUrl(newArgs)?.url);

  console.log();
};

// eslint-disable-next-line unicorn/prefer-top-level-await
run().then(success).catch(exit);

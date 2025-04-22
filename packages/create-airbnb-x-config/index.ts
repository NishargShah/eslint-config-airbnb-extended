#!/usr/bin/env node

import {
  blackBright,
  blue,
  cyan,
  cyanBright,
  greenBright,
  red,
  redBright,
  yellowBright,
} from 'picocolors';
import prompts from 'prompts';

import { configs, defaults, languages } from '@/constants';
import getArgs, { configHelp, getConfig } from '@/helpers/getArgs';
import getCommands from '@/helpers/getCommands';
import getConfigUrl from '@/helpers/getConfigUrl';
import installPackages from '@/helpers/installPackages';
import { exit, handleSigTerm, onCancel, success } from '@/utils';

import type { InstallPackagesArgs } from '@/helpers/installPackages';
import type { ValueOf } from '@/utils/types';

process.on('SIGINT', handleSigTerm);
process.on('SIGTERM', handleSigTerm);

const run = async () => {
  let args = getArgs();

  if (args.typescript === null) {
    const { typescript } = await prompts(
      {
        type: 'toggle',
        name: 'typescript',
        message: `Are you using ${blue('typescript')}?`,
        initial: defaults.typescript,
        active: 'Yes',
        inactive: 'No',
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
        message: `Are you using ${cyan('prettier')}?`,
        initial: defaults.prettier,
        active: 'Yes',
        inactive: 'No',
      },
      {
        onCancel,
      },
    );

    args = { ...args, prettier };
  }

  if (!args.language) {
    const { language } = await prompts(
      {
        type: 'select',
        name: 'language',
        message: 'Are you using?',
        initial: defaults.language,
        choices: [
          {
            title: 'React/React Router',
            description: cyanBright(
              'You are using React.js library or Remix ( React Router 7 ) framework',
            ),
            value: languages.REACT,
          },
          {
            title: 'Next',
            description: blackBright('You are using Next.js framework'),
            value: languages.NEXT,
          },
          {
            title: 'Node',
            description: greenBright('You are using Node or any other frameworks of it'),
            value: languages.NODE,
          },
          {
            title: 'Own Customization',
            description: redBright('You would like to customize by your own'),
            value: languages.OTHER,
          },
        ],
      },
      {
        onCancel,
      },
    );

    args = { ...args, language };
  }

  if (!args.config) {
    if (args.language === languages.OTHER) {
      const { config } = await prompts(
        {
          type: 'multiselect',
          name: 'config',
          message: 'Select Config:',
          min: 1,
          choices: [
            {
              title: 'Base',
              description: yellowBright('Base config without React/JSX configurations'),
              value: configs.BASE,
            },
            {
              title: 'Node',
              description: greenBright('Node config with Base config'),
              value: configs.NODE,
            },
            {
              title: 'React',
              description: cyanBright('React config with base config'),
              value: configs.REACT,
            },
            {
              title: 'Next',
              description: blackBright('Next.js config with base config'),
              value: configs.NEXT,
            },
            {
              title: 'Remix (React Router)',
              description: redBright('Remix (React Router) config with base config'),
              value: configs.REACT_ROUTER,
            },
          ],
          format: (prev) => {
            const values = prev as ValueOf<typeof configs>[];
            const opts = Object.fromEntries(values.map((value) => [`${value}Config`, true]));
            return getConfig(opts);
          },
          hint: configHelp,
        },
        {
          onCancel,
        },
      );

      args = { ...args, config };
    } else {
      args = { ...args, config: [] };
    }
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
      },
      {
        onCancel,
      },
    );

    args = { ...args, skipInstall };
  }

  const newArgs = args as InstallPackagesArgs;
  const commands = getCommands(newArgs);
  const command = commands.join(' ');
  console.log();

  if (args.skipInstall) {
    console.log(
      `${yellowBright('No Worries')}, you can install the packages yourself using your ${blue('favourite')} package manager (${newArgs.packageManager}, maybe? 🤔)`,
    );
    console.log();
    console.log(cyan('Command:'));
    console.log(blue(command));
  } else {
    console.log(
      `${blue('Installing')} packages using ${cyanBright(newArgs.packageManager)}, please wait...`,
    );

    await installPackages(newArgs);
    console.log();
    console.log(yellowBright('Installation Completed'));
    console.log();
    console.log(cyan('Executed Command:'));
    console.log(blue(command));
  }

  console.log();
  console.log(cyan('Config:'));

  if (newArgs.language === languages.OTHER) {
    console.log(
      red(
        'Customizing it to your needs requires considerable effort and is still a work in progress. In the meantime, please refer to the documentation and try setting up the configuration yourself using below link.',
      ),
    );
    console.log(
      blue(
        'https://github.com/NishargShah/eslint-config-airbnb-extended/tree/master/packages/eslint-config-airbnb-extended',
      ),
    );
  } else {
    console.log(getConfigUrl(newArgs));
  }

  console.log();
};

// eslint-disable-next-line unicorn/prefer-top-level-await
run().then(success).catch(exit);

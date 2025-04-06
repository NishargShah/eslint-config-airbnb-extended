import { blackBright, blue, cyanBright, greenBright, redBright, yellowBright } from 'picocolors';
import prompts from 'prompts';

import { configs, defaults, languages } from '@/constants';
import getArgs, { configHelp, getConfig } from '@/helpers/getArgs';
import { exit, handleSigTerm, onCancel, success } from '@/utils';

import type { ProgramOpts } from '@/helpers/getArgs';
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
          const opts = values.reduce<Partial<ProgramOpts>>((acc, value) => {
            return { ...acc, [`${value}Config`]: true };
          }, {});

          return getConfig(opts);
        },
        hint: configHelp,
      },
      {
        onCancel,
      },
    );

    args = { ...args, config };
  }

  console.log(args);
};

// eslint-disable-next-line unicorn/prefer-top-level-await
run().then(success).catch(exit);

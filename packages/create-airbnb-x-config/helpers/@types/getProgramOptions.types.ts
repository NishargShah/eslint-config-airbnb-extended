import { runtimes } from '@/constants';
import {
  ConfigType,
  LanguageType,
  FormatterType,
  RuntimeType,
  StrictConfigType,
  LegacyConfigType,
  PackageManagerType,
  StringBooleanType,
} from '@/constants/@types/index.types';
import { OverrideProperties } from 'type-fest';

interface ProgramOptions {
  config: ConfigType;
  language: LanguageType;
  formatter: FormatterType;
  runtime: Exclude<RuntimeType, typeof runtimes.REACT_ROUTER | typeof runtimes.REMIX>;
  strictConfig: StrictConfigType[];
  legacyConfig: LegacyConfigType;
  packageManager: PackageManagerType;
  createEslintFile: StringBooleanType | true;
  skipInstall: StringBooleanType | true;
}

export type PartialProgramOptions = Partial<ProgramOptions>;

export type GetProgramOptionsOutput = Partial<
  OverrideProperties<
    ProgramOptions,
    {
      createEslintFile: StringBooleanType;
      skipInstall: StringBooleanType;
    }
  >
>;

export type GetProgramOptions = () => GetProgramOptionsOutput;

import { runtimes } from '@/constants';
import {
  ConfigType,
  LanguageType,
  FormatterType,
  RuntimeType,
  StrictConfigType,
  LegacyConfigType,
  PackageManagerType,
} from '@/constants/@types/index.types';

export interface ProgramOpts {
  config: ConfigType;
  language: LanguageType;
  formatter: FormatterType;
  runtime: Exclude<RuntimeType, typeof runtimes.REACT_ROUTER | typeof runtimes.REMIX>;
  strictConfig: StrictConfigType;
  legacyConfig: LegacyConfigType;
  packageManager: PackageManagerType;
  createEslintFile: true;
  skipInstall: true;
}

import { ProgramOpts } from '@/helpers/@types/program.types';

export type GetConfigUrlParams = Pick<
  ProgramOpts,
  'config' | 'language' | 'formatter' | 'strictConfig' | 'runtime' | 'legacyConfig'
>;

export interface GetConfigUrlOutput {
  path: string;
  url: string;
}

export type GetConfigUrl = (params: GetConfigUrlParams) => GetConfigUrlOutput | null;

import type { GetArgsOutput } from '@/helpers/getArgs';

export type ValueOf<T> = T[keyof T];

export type NonNullableArgsOutput = {
  [K in keyof GetArgsOutput]: NonNullable<GetArgsOutput[K]>;
};

type GetDevDepsList = (extensions: string) => string[];

const getDevDepsList: GetDevDepsList = (extensions) => [
  'test/**',
  'tests/**',
  'spec/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  `test.{${extensions}}`,
  `test-*.{${extensions}}`,
  `**/*{.,_}{test,spec}.{${extensions}}`,
  `**/jest.config.{${extensions}}`,
  `**/jest.setup.{${extensions}}`,
  `**/vue.config.{${extensions}}`,
  `**/webpack.config.{${extensions}}`,
  `**/webpack.config.*.{${extensions}}`,
  `**/rollup.config.{${extensions}}`,
  `**/rollup.config.*.{${extensions}}`,
  `**/gulpfile.{${extensions}}`,
  `**/gulpfile.*.{${extensions}}`,
  `**/Gruntfile{,.{${extensions}}}`,
  `**/protractor.conf.{${extensions}}`,
  `**/protractor.conf.*.{${extensions}}`,
  `**/karma.conf.{${extensions}}`,
  `**/.eslintrc.{${extensions}}`,
  `**/*.eslint.{${extensions}}`,
  `**/eslint.config.{${extensions}}`,
  `**/prettier.config.{${extensions}}`,
];

export default getDevDepsList;

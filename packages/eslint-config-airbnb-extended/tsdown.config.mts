import { defineConfig } from 'tsdown';

export default defineConfig((options) => {
  const { watch } = options;

  return {
    entry: ['index.ts', 'legacy.ts'],
    dts: true,
    format: ['cjs', 'esm'],
    outDir: 'dist',
    platform: 'browser',
    treeshake: !watch,
    minify: !watch,
    exports: true,
    nodeProtocol: true,
    unbundle: true,
  };
});

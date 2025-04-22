import writeFiles from '@/lib/templates/writeFiles';
import { success } from '@/utils';
import createDirectories from '@/lib/templates/createDirectories';

const run = async () => {
  await createDirectories();
  await writeFiles();
};

run()
  .then(success)
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((error) => console.error(error));

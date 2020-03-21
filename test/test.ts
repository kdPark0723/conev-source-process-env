import ProcessEnvSource from '../lib';

async function main() {
  const processEnvSource = new ProcessEnvSource();

  console.log(await processEnvSource.export());
}

main();

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const LOAD_MODULES = ['contact'];

export function load(applicationName = 'DEFAULT', modules: string | string[] = LOAD_MODULES): void {
  if (typeof modules === 'string') {
    modules = modules
      .split(',')
      .map((x) => x.trim())
      .filter((x) => !_.isEmpty(x));
  }

  // eslint-disable-next-line no-console
  console.log(`Loading modules for ${applicationName}`, modules);

  for (const module of modules) {
    require(`@/${module}`);
  }
}

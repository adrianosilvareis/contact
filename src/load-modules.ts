/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

import { Logger } from '@/core/logger';

const LOAD_MODULES = ['contact'];

const logger = Logger.getLogger('System');

export function load(applicationName = 'DEFAULT', modules: string | string[] = LOAD_MODULES): void {
  if (typeof modules === 'string') {
    modules = modules
      .split(',')
      .map((x) => x.trim())
      .filter((x) => !_.isEmpty(x));
  }

  logger.info(`Loading modules for ${applicationName}`, modules);

  for (const module of modules) {
    require(`@/${module}`);
  }
}

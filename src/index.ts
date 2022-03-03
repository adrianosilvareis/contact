/* eslint-disable import/first */
require('reflect-metadata');
require('module-alias').addAlias('@', __dirname);
require('@/load-modules').load('app');

import { server } from '@/config/server';

// eslint-disable-next-line no-console
server.listen(8080, () => console.log('server listen on http://localhost:8080'));

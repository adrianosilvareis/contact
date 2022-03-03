/* eslint-disable import/first,import/order */
import 'reflect-metadata';
import path from 'path';

// Setup module alias
import moduleAlias from 'module-alias';

moduleAlias.addAlias('@', path.join(__dirname, '../src'));
moduleAlias.addAlias('#', __dirname);

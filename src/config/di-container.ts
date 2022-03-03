import { Container } from 'inversify';

import { Command } from '@/core/command';
import { DbClient } from '@/config/db-client';

export const diContainer = new Container();

diContainer.bind(DbClient).toSelf();
diContainer.bind(Command).toSelf();

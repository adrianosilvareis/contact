import { Container } from 'inversify';

import { Command } from '@/core/command';

export const diContainer = new Container();

diContainer.bind(Command).toSelf();

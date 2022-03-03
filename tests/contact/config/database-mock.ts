import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

import { DbClient } from '@/config/db-client';

export const databaseMock = new DbClient(mockDeep<PrismaClient>());
export const clientSpy = databaseMock.db as unknown as DeepMockProxy<PrismaClient>;

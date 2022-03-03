import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';

@injectable()
export class DbClient {
  private prisma: PrismaClient;

  public constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  get db() {
    return this.prisma;
  }
}

import { diContainer } from '@/config/di-container';
import { ListContactController } from '@/contact/infrastructure/controllers/list-contact-controller';
import { ListContactUseCase } from '@/contact/domain/use-case/list-contact-use-case';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';
import { PostgresContactRepository } from '@/contact/infrastructure/postgres-repository/postgres-contact-respository';

diContainer.bind(ListContactController).toSelf();
diContainer.bind(ListContactUseCase).toSelf();
diContainer.bind(ListContactRepository).to(PostgresContactRepository);

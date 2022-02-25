import { Command } from "../../../core/command";
import { ListContactRepository } from "../repositories/list-contact-repository";

export class ListContactUseCase extends Command{
  public constructor(
    private readonly listContactRepository: ListContactRepository
  ) {
    super()
  }
  
  public async handler(): Promise<void> {
    const list = await this.listContactRepository.listContacts();
    
    this.emit("success", list)
  }
}
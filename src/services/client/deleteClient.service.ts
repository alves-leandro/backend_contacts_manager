import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";

const deleteClientService = async (idClient: string): Promise<void> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  // const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  
  const client: Client | null = await clientRepository.findOneBy({ id: idClient });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  // // Remover os contatos associados ao cliente
  // for (const contact of client.contact) {
  //   await contactsRepository.remove(contact);
  // }

  await clientRepository.remove(client);
};

export default deleteClientService;
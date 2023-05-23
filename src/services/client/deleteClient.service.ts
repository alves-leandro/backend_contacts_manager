import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Client } from "../../entities/client.entitie";

const deleteClientService = async (idClient: string): Promise<void> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({ id: idClient });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  await clientRepository.remove(client);
};

export default deleteClientService;